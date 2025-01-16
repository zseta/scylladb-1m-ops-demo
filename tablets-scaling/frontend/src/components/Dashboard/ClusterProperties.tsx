import { type ReactElement, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Icon } from '@/components/Icon';
import { Slider } from '@/components/Slider';
import { ToggleButton } from '@/components/Dashboard/ToggleButton';
import { useSocketContext } from '@/context/socket';

export const ClusterProperties = (): ReactElement => {
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
