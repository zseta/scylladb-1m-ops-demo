import type { ReactNode } from 'react';
import { Button } from 'react-bootstrap';

interface ToggleButtonProps {
  readonly onState: ReactNode;
  readonly offState: ReactNode;
  readonly isRunning: boolean;
  readonly onClick: () => void;
}

export const ToggleButton = ({
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
