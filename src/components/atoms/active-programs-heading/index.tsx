import classNames from "classnames";
export interface ActiveProgramsHeadingProps {
  children?: React.ReactNode;
  className?: string;
}

export const ActiveProgramsHeading: React.FC<ActiveProgramsHeadingProps> = ({
  children,
  className,
}) => (
  <p className={classNames("a-active-programs-heading", className)}>
    {children}
  </p>
);
