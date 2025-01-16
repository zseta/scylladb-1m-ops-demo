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

type GrafanaURLs = Readonly<Record<string, string>>;

export const GrafanaContainer = (): ReactElement => {
  const [grafanaUrls, setGrafanaUrls] = useState<GrafanaURLs>({
    'Loading Grafana...': '',
  });

  useEffect(() => {
    // TODO: Define this resource and document its use
    fetch('../data/grafana_urls.json') // Adjust the path based on where the file is hosted
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }

        return response.json();
      })
      .then((data: unknown) => {
        if (isGrafanaUrls(data)) {
          console.log('Fetched grafanaUrls');
          setGrafanaUrls(data);
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

const isGrafanaUrls = (data: unknown): data is GrafanaURLs =>
  isObject(data) && allRecordValuesAreStrings(data);

const ConsoleOutput = (): ReactElement => {
  const { socketRef } = useSocketContext();
  const [output, setOutput] = useState('[Welcome to ScyllaDB Tech Demo]');
  const outputRef = useRef<HTMLPreElement | null>(null);

  // Set up socket connection and listen for playbook output
  useEffect(() => {
    socketRef.current = io();

    socketRef.current.on('playbook_output', (data: unknown) => {
      if (isPlaybookOutput(data)) {
        setOutput((prevOutput) => prevOutput + data['output']);

        console.log(output);
      } else {
        console.error('Invalid data received:', data);
      }
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [socketRef, output]);

  // Scroll the pre element to the bottom on output change
  useEffect(() => {
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

interface PlaybookOutputData {
  readonly output: string;
}

const isPlaybookOutput = (data: unknown): data is PlaybookOutputData =>
  isObject(data) &&
  objectHasProperty(data, 'output') &&
  typeof data['output'] === 'string';
