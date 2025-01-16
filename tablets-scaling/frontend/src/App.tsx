import { type ReactElement, useState } from 'react';
import { Tabs, Tab, Button, Collapse, Card, Spinner } from 'react-bootstrap';
import { Icon } from '@/components/Icon';
import { GrafanaContainer } from '@/components/Grafana';
import { Dashboard } from '@/components/Dashboard';
import { useSocketContext } from '@/context/socket';
import { SocketProvider } from '@/context/SocketProvider';
import logo from '@/assets/images/scylla-logo.svg';
import mascot from '@/assets/images/scylladb-mascot-cloud.svg';

export const App = () => (
  <SocketProvider>
    <MainContainer />
    <GrafanaContainer />
  </SocketProvider>
);

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
          <Dashboard />
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
