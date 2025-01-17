import type { ReactElement } from 'react';
import { Card } from 'react-bootstrap';
import { type LinkButtonProps, LinkButton } from '@/components/Button';
import mascot from '@/assets/images/scylladb-mascot-cloud.svg';

export const About = (): ReactElement => (
  <>
    <Banner />
    <LinkButtons />
    <Copyright />
  </>
);

const Banner = (): ReactElement => (
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
);

const linkButtonsProps: readonly LinkButtonProps[] = [
  {
    href: 'https://www.scylladb.com',
    label: 'ScyllaDB.com',
  },
  {
    href: 'https://docs.scylladb.com',
    label: 'Documentation',
    iconVariant: 'docs',
  },
  {
    href: 'https://github.com/scylladb',
    label: 'GitHub',
    iconVariant: 'github',
  },
  {
    href: 'https://twitter.com/scylladb',
    label: 'X',
    iconVariant: 'x',
  },
  {
    href: 'https://www.linkedin.com/company/scylladb',
    label: 'LinkedIn',
    iconVariant: 'linkedin',
  },
];

const LinkButtons = (): ReactElement => (
  <div className="flex-grow-1">
    <div className="hstack justify-content-center gap-3 flex-wrap">
      {linkButtonsProps.map((props) => (
        <LinkButton
          key={props.href}
          {...props}
        />
      ))}
    </div>
  </div>
);

const Copyright = (): ReactElement => (
  <div className="border-top pt-3 small text-center">
    &copy; {new Date().getFullYear()} ScyllaDB. All rights reserved.
  </div>
);
