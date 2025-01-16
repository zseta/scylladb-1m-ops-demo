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
          <Icon variant="dashboard" /> Dashboard
        </>
      }
    >
      <Dashboard />
    </Tab>

    <Tab
      eventKey="settings"
      title={
        <>
          <Icon variant="rocket" /> Scenarios
        </>
      }
    >
      <Scenarios />
    </Tab>

    <Tab
      eventKey="about"
      title={
        <>
          <Icon variant="info" /> About
        </>
      }
    >
      <About />
    </Tab>
  </Tabs>
);
