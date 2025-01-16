import type { ReactElement } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Dashboard } from '@/components/Dashboard';
import { Icon } from '@/components/Icon';
import { Scenarios } from '@/components/Scenarios';
import { About } from '@/components/About';

type Key = 'dashboard' | 'scenarios' | 'about';

interface SectionTab {
  readonly key: Key;
  readonly title: string;
  readonly iconVariant: string;
  readonly component: () => ReactElement;
}

const tabs: readonly SectionTab[] = [
  {
    key: 'dashboard',
    title: 'Dashboard',
    iconVariant: 'dashboard',
    component: Dashboard,
  },
  {
    key: 'scenarios',
    title: 'Scenarios',
    iconVariant: 'rocket',
    component: Scenarios,
  },
  {
    key: 'about',
    title: 'About',
    iconVariant: 'info',
    component: About,
  },
];

export const TabsLayout = (): ReactElement => (
  <Tabs
    defaultActiveKey="dashboard"
    id="controlTabs"
    className="nav-tabs nav-fill"
  >
    {tabs.map(({ key, title, iconVariant, component: Component }) => (
      <Tab
        key={key}
        eventKey={key}
        title={
          <>
            <Icon variant={iconVariant} /> {title}
          </>
        }
      >
        <Component />
      </Tab>
    ))}
  </Tabs>
);
