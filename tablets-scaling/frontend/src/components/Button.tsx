import type { ReactElement } from 'react';
import { Icon } from '@/components/Icon';
import { Button } from 'react-bootstrap';

export interface LinkButtonProps {
  readonly href: string;
  readonly label: string;
  readonly iconVariant?: string;
}

export const LinkButton = ({
  href,
  label,
  iconVariant,
}: LinkButtonProps): ReactElement => (
  <Button
    variant="light"
    target="_blank"
    href={href}
  >
    {iconVariant && <Icon variant={iconVariant} />}
    {label}
  </Button>
);
