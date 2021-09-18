import classNames from "classnames";

export interface ThreeDotProps {
  children?: React.ReactNode;
  className?: string;
}

export const ThreeDot: React.FC<ThreeDotProps> = ({ children, className }) => (
  <div className={classNames("a-dot", className)}>{children}</div>
);
