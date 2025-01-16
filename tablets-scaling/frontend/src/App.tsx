import type { ReactElement } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Icon } from '@/components/Icon';
import { GrafanaContainer } from '@/components/Grafana';
import { Dashboard } from '@/components/Dashboard';
import { Scenarios } from '@/components/Scenarios';
import { About } from '@/components/About';
import { SocketProvider } from '@/context/SocketProvider';
import logo from '@/assets/images/scylla-logo.svg';

export const App = () => (
  <SocketProvider>
    <MainContainer />
    <GrafanaContainer />
  </SocketProvider>
);

const MainContainer = (): ReactElement => (
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
        <Scenarios />
      </Tab>

      <Tab
        eventKey="about"
        title={
          <>
            <Icon icon="info" /> About
          </>
        }
      >
        <About />
      </Tab>
    </Tabs>
  </div>
);
