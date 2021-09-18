import classNames from "classnames";
export interface MyDayTextProps {
  children?: React.ReactNode;
  className?: string;
}

export const MyDayText: React.FC<MyDayTextProps> = ({
  children,
  className,
}) => <p className={classNames("a-my-day-text", className)}>{children}</p>;
