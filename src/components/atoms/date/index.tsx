import classNames from "classnames";
export interface DateProps {
  children?: React.ReactNode;
  className?: string;
}

export const Date: React.FC<DateProps> = ({ children, className }) => (
  <span className={classNames("a-date", className)}>{children}</span>
);
