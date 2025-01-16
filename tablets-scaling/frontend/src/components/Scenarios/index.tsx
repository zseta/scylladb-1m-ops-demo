import type { ReactElement } from 'react';
import { ScenarioCard } from '@/components/Scenarios/Card';
import { useSocketContext } from '@/context/socket';

export const Scenarios = (): ReactElement => {
  const { emitEvent } = useSocketContext();

  return (
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
  );
};
