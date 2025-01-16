import type { ReactElement } from 'react';
import { Icon } from '@/components/Icon';
import { Button, Card } from 'react-bootstrap';
import mascot from '@/assets/images/scylladb-mascot-cloud.svg';

export const About = (): ReactElement => (
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
          Test and benchmark ScyllaDB under a 1 million operations per second
          workload.
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
          <Icon variant="docs" />
          Documentation
        </Button>
        <Button
          variant="light"
          href="https://github.com/scylladb"
          target="_blank"
        >
          <Icon variant="github" />
          GitHub
        </Button>
        <Button
          variant="light"
          href="https://twitter.com/scylladb"
          target="_blank"
        >
          <Icon variant="x" />X
        </Button>
        <Button
          variant="light"
          href="https://www.linkedin.com/company/scylladb"
          target="_blank"
        >
          <Icon variant="linkedin" />
          LinkedIn
        </Button>
      </div>
    </div>
    <div className="border-top pt-3 small text-center">
      &copy; {new Date().getFullYear()} ScyllaDB. All rights reserved.
    </div>
  </>
);
