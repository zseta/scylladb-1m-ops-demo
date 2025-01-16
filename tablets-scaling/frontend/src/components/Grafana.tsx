import { type ReactElement, useEffect, useState, useRef } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { io } from 'socket.io-client';
import { Icon } from '@/components/Icon';
import { useSocketContext } from '@/context/socket';
import {
  allRecordValuesAreStrings,
  isObject,
  objectHasProperty,
} from '@/util/guard';

export const GrafanaContainer = (): ReactElement => {
  const [grafanaUrls, setGrafanaUrls] = useState<
    Readonly<Record<string, string>>
  >({
    'Loading Grafana...': '',
  });

  useEffect(() => {
    fetch('../data/grafana_urls.json') // Adjust the path based on where the file is hosted
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data: unknown) => {
        if (isObject(data) && allRecordValuesAreStrings(data)) {
          const urls: Record<string, string> = data;

          console.log('Fetched grafanaUrls');
          setGrafanaUrls(urls);
        } else {
          throw new Error(
            'Invalid Grafana URLs data received. Expected Record<string, string> but got' +
              String(data)
          );
        }
      })
      .catch((error: unknown) => {
        console.error('Error fetching grafanaUrls:', error);
      });
  }, []);

  return (
    <div className="grafana">
      <Tabs
        defaultActiveKey="console"
        id="tabMenu"
        className="nav-tabs"
        transition={false}
      >
        <Tab
          eventKey="console"
          title={
            <>
              <Icon variant="terminal" /> Console
            </>
          }
        >
          <ConsoleOutput />
        </Tab>
        {/* Dynamically Rendered Tabs */}
        {Object.entries(grafanaUrls).map(([key, url]) => (
          <Tab
            eventKey={key.toLowerCase()}
            title={key}
            key={key}
          >
            <iframe
              src={url}
              title={key}
            ></iframe>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

const ConsoleOutput = () => {
  const { socketRef } = useSocketContext();
  const [output, setOutput] = useState('[Welcome to ScyllaDB Tech Demo]');
  const outputRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    // Initialize the socket connection
    socketRef.current = io();

    // Set up event listeners
    socketRef.current.on('playbook_output', (data: unknown) => {
      if (
        isObject(data) &&
        objectHasProperty(data, 'output') &&
        typeof data['output'] === 'string'
      ) {
        const output = data['output'];

        setOutput((prevOutput) => prevOutput + output);
        console.log(output);
      } else {
        console.error('Invalid data received:', data);
      }
    });

    // Cleanup socket connection on component unmount
    return () => {
      socketRef.current?.disconnect();
    };
  }, [socketRef]);

  useEffect(() => {
    // Scroll the pre element to the bottom
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <pre
      id="output"
      className="pre flex-grow-1"
      ref={outputRef}
    >
      {output}
    </pre>
  );
};
