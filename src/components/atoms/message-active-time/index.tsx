import classNames from "classnames";
export interface TextProps {
  children?: React.ReactNode;
  className?: string;
}

export const MessageActiveTimeText: React.FC<TextProps> = ({
  children,
  className,
}) => <p className={classNames("a-active-time-text", className)}>{children}</p>;
