import {
  type ReactElement,
  type ReactNode,
  useEffect,
  useState,
  useRef,
  createContext,
  useContext,
} from 'react';
import {
  Tabs,
  Tab,
  Button,
  Collapse,
  Card,
  Form,
  Spinner,
} from 'react-bootstrap';
import { io, type Socket } from 'socket.io-client';
import { Icon } from '@/components/Icon';
import { Slider } from '@/components/Slider';
import logo from '@/assets/images/scylla-logo.svg';
import mascot from '@/assets/images/scylladb-mascot-cloud.svg';
import {
  allRecordValuesAreStrings,
  isObject,
  objectHasProperty,
} from '@/util/guard';

interface SocketContext {
  readonly socketRef: React.MutableRefObject<Socket | null>;
  readonly emitEvent: (eventName: string) => void;
}

const socketContext = createContext<SocketContext | null>(null);

export const App = () => {
  const socketRef = useRef<Socket | null>(null);

  const emitEvent = (eventName: string) => {
    console.log(`Emitting event: ${eventName}`);

    if (socketRef.current) {
      socketRef.current.emit(eventName);
    }
  };

  return (
    <socketContext.Provider value={{ socketRef: socketRef, emitEvent }}>
      <MainContainer />
      <GrafanaContainer />
    </socketContext.Provider>
  );
};

const useSocketContext = (): SocketContext => {
  const context = useContext(socketContext);

  if (context === null) {
    throw new Error(
      'useSocketRefContext must be used within socketRefContext.Provider'
    );
  } else {
    return context;
  }
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

interface ScenarioCardProps {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly collapseId: string;
  readonly onClick: () => void;
}

const ScenarioCard = ({
  icon,
  title,
  description,
  collapseId,
  onClick,
}: ScenarioCardProps) => {
  const [open, setOpen] = useState(true);
  const [runState, setRunState] = useState(0);

  const handleButtonClick = () => {
    setRunState(2);
    onClick();
  };

  return (
    <Card className="p-2">
      <div className="desc">
        <a
          className="d-block flex-grow-1"
          onClick={() => {
            setOpen(!open);
          }}
          aria-controls={collapseId}
          aria-expanded={open}
        >
          <h4>
            <i className={icon}></i> {title}
          </h4>
        </a>
        <Collapse in={open}>
          <div id={collapseId}>
            <div className="collapse-content">{description}</div>
          </div>
        </Collapse>
      </div>
      <div className="actions">
        <RunButton
          state={runState}
          onClick={handleButtonClick}
        />
      </div>
    </Card>
  );
};

interface ToggleButtonProps {
  readonly onState: ReactNode;
  readonly offState: ReactNode;
  readonly isRunning: boolean;
  readonly onClick: () => void;
}

const ToggleButton = ({
  onState,
  offState,
  isRunning,
  onClick,
}: ToggleButtonProps) => {
  return (
    <Button
      variant={isRunning ? 'warning' : 'success'}
      onClick={onClick}
    >
      {isRunning ? offState : onState}
    </Button>
  );
};

interface RunButtonProps {
  readonly state: number;
  readonly onClick: () => void;
}

const RunButton = ({ state, onClick }: RunButtonProps) => {
  return (
    <div>
      {state === 0 && (
        <Button
          variant="light"
          onClick={onClick}
        >
          <i className="icon-play me-2"></i> Run
        </Button>
      )}
      {state === 1 && (
        <Button
          variant="light"
          disabled
        >
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className="me-2"
          />
          Running
        </Button>
      )}
      {state === 2 && (
        <Button
          variant="success"
          disabled
        >
          <i className="icon-check"></i>
        </Button>
      )}
    </div>
  );
};

const ClusterProperties = (): ReactElement => {
  const [isRunning, setIsRunning] = useState(false);
  const [numNodes, setNumNodes] = useState(3);
  const [instanceType, setInstanceType] = useState('t2.micro');
  const { emitEvent } = useSocketContext();

  return (
    <Card>
      <Card.Body>
        <h3 className="mb-3">Cluster Properties</h3>
        <Form className="vstack gap-3 mb-3">
          <Slider
            value={numNodes}
            min={1}
            max={10}
            step={1}
            onChange={(e) => {
              setNumNodes(Number(e.target.value));
            }}
            label="Number of Nodes"
          />

          <Form.Group>
            <Form.Label
              column
              sm="4"
              className="small-label"
            >
              Instance Type
            </Form.Label>
            <div>
              <Form.Select
                value={instanceType}
                onChange={(e) => {
                  setInstanceType(e.target.value);
                }}
              >
                <option value="t2.micro">t2.micro</option>
                <option value="t2.small">t2.small</option>
                <option value="t2.medium">t2.medium</option>
                <option value="t3.micro">t3.micro</option>
                <option value="t3.small">t3.small</option>
                <option value="t3.medium">t3.medium</option>
              </Form.Select>
            </div>
          </Form.Group>

          <div className="hstack gap-3">
            <Button
              variant="primary"
              onClick={() => {
                emitEvent('sample_data');
              }}
            >
              Save
            </Button>

            <ToggleButton
              onState={
                <>
                  <Icon icon="play" /> Run Cluster
                </>
              }
              offState={
                <>
                  <Icon icon="stop" /> Stop Cluster
                </>
              }
              isRunning={isRunning}
              onClick={() => {
                setIsRunning((prevIsRunning) => !prevIsRunning);
                console.log('Cluster stopped.');
              }}
            />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

const LoaderProperties = (): ReactElement => {
  const [isRunning, setIsRunning] = useState(false);
  const [readOps, setReadOps] = useState(1000);
  const [writeOps, setWriteOps] = useState(500);
  const [numLoaders, setNumLoaders] = useState(2);

  return (
    <Card>
      <Card.Body>
        <h3 className="mb-3">Loader Properties</h3>
        <Form className="vstack gap-3">
          <Slider
            value={readOps}
            min={500}
            max={5000}
            step={100}
            onChange={(e) => {
              setReadOps(Number(e.target.value));
            }}
            label="Read Ops/sec"
          />
          <Slider
            value={writeOps}
            min={100}
            max={5000}
            step={100}
            onChange={(e) => {
              setWriteOps(Number(e.target.value));
            }}
            label="Write Ops/sec"
          />
          <Slider
            value={numLoaders}
            min={1}
            max={20}
            step={1}
            onChange={(e) => {
              setNumLoaders(Number(e.target.value));
            }}
            label="Number of Loader Instances"
          />
          <div className="hstack gap-3">
            <Button
              variant="primary"
              onClick={() => {
                // handleSaveLoaderProperties(readOps, writeOps, numLoaders)
                // TODO: What's supposed to happen here?
                // In ClusterProperties, we just emit sample data.
              }}
            >
              Save
            </Button>

            <ToggleButton
              onState={
                <>
                  <Icon icon="play" /> Start Loader
                </>
              }
              offState={
                <>
                  <Icon icon="stop" /> Stop Loader
                </>
              }
              isRunning={isRunning}
              onClick={() => {
                setIsRunning((prevIsRunning) => !prevIsRunning);
                console.log('Loader stopped.');
              }}
            />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

const MainContainer = (): ReactElement => {
  const { emitEvent } = useSocketContext();

  return (
    <div className="controls gap-4">
      <div className="top-nav d-flex align-items-center">
        <img
          src={logo}
          alt="ScyllaDB"
        />
        <div className="flex-grow-1"></div>
        <h3>Tech Demo</h3>
      </div>

      <Tabs
        defaultActiveKey="home"
        id="controlTabs"
        className="nav-tabs nav-fill"
      >
        <Tab
          eventKey="home"
          title={
            <>
              <Icon icon="dashboard" /> Dashboard
            </>
          }
        >
          <>
            <ClusterProperties />
            <LoaderProperties />
          </>
        </Tab>
        <Tab
          eventKey="settings"
          title={
            <>
              <Icon icon="rocket" /> Scenarios
            </>
          }
        >
          <div>
            <h3 className="mb-3">Tablets demo</h3>
            <ol className="cards-list">
              <li>
                <ScenarioCard
                  icon="icon-database"
                  title="Set up 3-node cluster"
                  description="Initialize a resilient ScyllaDB cluster with three interconnected nodes, ready for high-performance data operations."
                  collapseId="stepOneCollapse"
                  onClick={() => {
                    emitEvent('original_cluster');
                  }}
                />
              </li>
              <li>
                <ScenarioCard
                  icon="icon-sample-data"
                  title="Load sample data"
                  description="Populate the database with predefined sample data, showcasing key-value pairs, relational mappings, or time-series metrics."
                  collapseId="stepTwoCollapse"
                  onClick={() => {
                    emitEvent('sample_data');
                  }}
                />
              </li>
              <li>
                <ScenarioCard
                  icon="icon-rocket"
                  title="Start loader"
                  description="Simulate real-world traffic by generating a continuous workload on the database to evaluate its performance."
                  collapseId="stepThreeCollapse"
                  onClick={() => {
                    emitEvent('start_stress');
                  }}
                />
              </li>
              <li>
                <ScenarioCard
                  icon="icon-scale_out"
                  title="Scale out (add 3 nodes)"
                  description="Seamlessly add three additional nodes to the cluster, enabling automatic data redistribution and increased capacity using ScyllaDB's tablet architecture."
                  collapseId="stepFourCollapse"
                  onClick={() => {
                    emitEvent('scale_out');
                  }}
                />
              </li>
              <li>
                <ScenarioCard
                  icon="icon-scale_in"
                  title="Scale in (remove 3 nodes)"
                  description="Simulate real-world traffic by generating a continuous workload on the database to evaluate its performance."
                  collapseId="stepFiveCollapse"
                  onClick={() => {
                    emitEvent('scale_in');
                  }}
                />
              </li>
              <li>
                <ScenarioCard
                  icon="icon-stop"
                  title="Stop loader"
                  description="Simulate real-world traffic by generating a continuous workload on the database to evaluate its performance."
                  collapseId="stepSixCollapse"
                  onClick={() => {
                    emitEvent('stop_stress');
                  }}
                />
              </li>
            </ol>
          </div>
        </Tab>

        <Tab
          eventKey="about"
          title={
            <>
              <Icon icon="info" /> About
            </>
          }
        >
          <>
            <Card>
              <Card.Body className="section-about">
                <img
                  src={mascot}
                  alt=""
                />
                <h2>
                  1 million ops/sec <br />
                  ScyllaDB demos with Terraform
                </h2>
                <p className="lead">
                  Test and benchmark ScyllaDB under a 1 million operations per
                  second workload.
                </p>
              </Card.Body>
            </Card>

            <div className="flex-grow-1">
              <div className="hstack justify-content-center gap-3 flex-wrap">
                <Button
                  variant="light"
                  href="https://www.scylladb.com"
                  target="_blank"
                >
                  ScyllaDB.com
                </Button>
                <Button
                  variant="light"
                  href="https://docs.scylladb.com"
                  target="_blank"
                >
                  <Icon icon="docs" />
                  Documentation
                </Button>
                <Button
                  variant="light"
                  href="https://github.com/scylladb"
                  target="_blank"
                >
                  <Icon icon="github" />
                  GitHub
                </Button>
                <Button
                  variant="light"
                  href="https://twitter.com/scylladb"
                  target="_blank"
                >
                  <Icon icon="x" />X
                </Button>
                <Button
                  variant="light"
                  href="https://www.linkedin.com/company/scylladb"
                  target="_blank"
                >
                  <Icon icon="linkedin" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="border-top pt-3 small text-center">
              &copy; {new Date().getFullYear()} ScyllaDB. All rights reserved.
            </div>
          </>
        </Tab>
      </Tabs>
    </div>
  );
};

const GrafanaContainer = (): ReactElement => {
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
              <Icon icon="terminal" /> Console
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
