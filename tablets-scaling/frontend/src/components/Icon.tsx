import type { ReactNode } from 'react';

interface IconProps {
  readonly icon: string;
  readonly margin?: string;
  readonly children?: ReactNode;
}

export const Icon = ({ icon, margin = 'me-1', children }: IconProps) => {
  return <i className={`icon-${icon} ${margin}`}>{children}</i>;
};
