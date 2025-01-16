import type { ReactElement } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Dashboard } from '@/components/Dashboard';
import { Icon } from '@/components/Icon';
import { Scenarios } from '@/components/Scenarios';
import { About } from '@/components/About';

export const TabsLayout = (): ReactElement => (
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
);
