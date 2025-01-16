import { type ReactElement, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Icon } from '@/components/Icon';
import { Slider } from '@/components/Slider';
import { ToggleButton } from '@/components/Dashboard/ToggleButton';

export const LoaderProperties = (): ReactElement => {
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
                  <Icon variant="play" /> Start Loader
                </>
              }
              offState={
                <>
                  <Icon variant="stop" /> Stop Loader
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
