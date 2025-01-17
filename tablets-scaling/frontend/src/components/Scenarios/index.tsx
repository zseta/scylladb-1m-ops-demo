import {
  type Dispatch,
  type ReactElement,
  type SetStateAction,
  useState,
} from 'react';
import { Collapse, Card, Button, Spinner } from 'react-bootstrap';
import { SectionHeader } from '@/components/SectionHeader';
import { useSocketContext } from '@/context/socket';
import type { ScenarioEventKey } from '@/util/api';

const scenarioCardsProps: readonly ScenarioCardProps[] = [
  {
    eventKey: 'original_cluster',
    icon: 'icon-database',
    title: 'Set up 3-node cluster',
    description:
      'Initialize a resilient ScyllaDB cluster with three interconnected nodes, ready for high-performance data operations.',
    collapseId: 'stepOneCollapse',
  },
  {
    eventKey: 'sample_data',
    icon: 'icon-sample-data',
    title: 'Load sample data',
    description:
      'Populate the database with predefined sample data, showcasing key-value pairs, relational mappings, or time-series metrics.',
    collapseId: 'stepTwoCollapse',
  },
  {
    eventKey: 'start_stress',
    icon: 'icon-rocket',
    title: 'Start loader',
    description:
      'Simulate real-world traffic by generating a continuous workload on the database to evaluate its performance.',
    collapseId: 'stepThreeCollapse',
  },
  {
    eventKey: 'scale_out',
    icon: 'icon-scale_out',
    title: 'Scale out (add 3 nodes)',
    description:
      "Seamlessly add three additional nodes to the cluster, enabling automatic data redistribution and increased capacity using ScyllaDB's tablet architecture.",
    collapseId: 'stepFourCollapse',
  },
  {
    eventKey: 'scale_in',
    icon: 'icon-scale_in',
    title: 'Scale in (remove 3 nodes)',
    description:
      'Simulate real-world traffic by generating a continuous workload on the database to evaluate its performance.',
    collapseId: 'stepFiveCollapse',
  },
  {
    eventKey: 'stop_stress',
    icon: 'icon-stop',
    title: 'Stop loader',
    description:
      'Simulate real-world traffic by generating a continuous workload on the database to evaluate its performance.',
    collapseId: 'stepSixCollapse',
  },
];

export const Scenarios = (): ReactElement => (
  <div>
    <SectionHeader>Tablets demo</SectionHeader>

    <ol className="cards-list">
      {scenarioCardsProps.map((props) => (
        <li key={props.eventKey}>
          <ScenarioCard {...props} />
        </li>
      ))}
    </ol>
  </div>
);

export interface ScenarioCardProps {
  readonly eventKey: ScenarioEventKey;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly collapseId: string;
}

type RunState = 'idle' | 'running' | 'success';

export const ScenarioCard = ({
  icon,
  title,
  description,
  collapseId,
  eventKey,
}: ScenarioCardProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(true);
  const [runState, setRunState] = useState<RunState>('idle');
  const { emitEvent } = useSocketContext();

  return (
    <Card className="p-2">
      <div className="desc">
        <ScenarioCardHeader
          icon={icon}
          title={title}
          collapseId={collapseId}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />

        <CollapseContent
          isOpen={isOpen}
          collapseId={collapseId}
          description={description}
        />
      </div>

      <div className="actions">
        <ActionButton
          runState={runState}
          onClick={() => {
            setRunState('success');
            emitEvent(eventKey);
          }}
        />
      </div>
    </Card>
  );
};

interface ScenarioCardHeaderProps {
  readonly icon: string;
  readonly title: string;
  readonly collapseId: string;
  readonly setIsOpen: Dispatch<SetStateAction<boolean>>;
  readonly isOpen: boolean;
}

const ScenarioCardHeader = ({
  icon,
  title,
  collapseId,
  setIsOpen,
  isOpen,
}: ScenarioCardHeaderProps): ReactElement => (
  <a
    className="d-block flex-grow-1"
    onClick={() => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }}
    aria-controls={collapseId}
    aria-expanded={isOpen}
  >
    <h4>
      <i className={icon}></i> {title}
    </h4>
  </a>
);

interface CollapseContentProps {
  readonly isOpen: boolean;
  readonly collapseId: string;
  readonly description: string;
}

const CollapseContent = ({
  isOpen,
  collapseId,
  description,
}: CollapseContentProps): ReactElement => (
  <Collapse in={isOpen}>
    <div
      className="collapse-content"
      id={collapseId}
    >
      {description}
    </div>
  </Collapse>
);

interface ActionButtonProps {
  readonly runState: RunState;
  readonly onClick: () => void;
}

const ActionButton = ({ runState, onClick }: ActionButtonProps) => {
  switch (runState) {
    case 'idle': {
      return (
        <Button
          variant="light"
          onClick={onClick}
        >
          <i className="icon-play me-2"></i> Run
        </Button>
      );
    }
    case 'running': {
      return (
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
      );
    }
    case 'success': {
      return (
        <Button
          variant="success"
          disabled
        >
          <i className="icon-check"></i>
        </Button>
      );
    }
  }
};
