import classNames from "classnames";
export interface TimeLabel {
  children?: React.ReactNode;
  className?: string;
}

export const TimeLabel: React.FC<TimeLabel> = ({ children, className }) => (
  <p className={classNames("a-time-label", className)}>{children}</p>
);
