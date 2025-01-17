import type { ReactElement, ReactNode } from 'react';
import { Icon, type IconProps } from '@/components/Icon';
import {
  Button as BootstrapButton,
  ButtonProps as BootstrapButtonProps,
} from 'react-bootstrap';

interface ButtonProps extends BootstrapButtonProps {
  readonly iconProps?: IconProps;
}

export const Button = ({
  iconProps,
  children,
  ...bootstrapButtonProps
}: ButtonProps): ReactElement => (
  // @ts-expect-error This works but Bootstrap haven't defined the types to compile with
  // exactOptionalPropertyTypes set to true.
  <BootstrapButton {...bootstrapButtonProps}>
    {iconProps && <Icon {...iconProps} />}
    {children}
  </BootstrapButton>
);

interface LinkButtonProps {
  readonly href: string;
  readonly iconProps?: IconProps;
  readonly children?: ReactNode;
}

export const LinkButton = ({
  href,
  iconProps,
  children,
}: LinkButtonProps): ReactElement => (
  <Button
    {...(iconProps ? { iconProps } : {})}
    variant="light"
    target="_blank"
    href={href}
  >
    {children}
  </Button>
);
