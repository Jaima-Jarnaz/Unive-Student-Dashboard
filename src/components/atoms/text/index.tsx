import classNames from "classnames";
export interface TextProps {
  children?: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children, className }) => (
  <p className={classNames("a-text", className)}>{children}</p>
);
