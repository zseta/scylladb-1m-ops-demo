export interface IconProps {
  readonly variant: string;
  readonly utilClassesString?: string;
}

export const Icon = ({ variant, utilClassesString }: IconProps) => (
  <i className={`icon-${variant} ${utilClassesString ?? ''}`} />
);
