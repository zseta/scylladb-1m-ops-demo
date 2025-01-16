import type { ReactElement } from 'react';
import logo from '@/assets/images/scylla-logo.svg';

export const HeaderNav = (): ReactElement => (
  <div className="top-nav d-flex align-items-center">
    <img
      src={logo}
      alt="ScyllaDB"
    />
    <div className="flex-grow-1"></div>
    <h3>Tech Demo</h3>
  </div>
);
