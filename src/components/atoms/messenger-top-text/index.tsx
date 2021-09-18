import classNames from "classnames";
export interface MessengerTopTextProps {
  children?: React.ReactNode;
  className?: string;
}

export const MessengerTopText: React.FC<MessengerTopTextProps> = ({
  children,
  className,
}) => (
  <p className={classNames("a-messenger-top-text", className)}>{children}</p>
);
