interface IconProps {
  readonly variant: string;
}

export const Icon = ({ variant }: IconProps) => (
  <i className={`icon-${variant} me-1`} />
);
