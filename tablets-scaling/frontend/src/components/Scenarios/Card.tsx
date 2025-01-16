import { useState } from 'react';
import { Collapse, Card, Button, Spinner } from 'react-bootstrap';

interface ScenarioCardProps {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly collapseId: string;
  readonly onClick: () => void;
}

export const ScenarioCard = ({
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
