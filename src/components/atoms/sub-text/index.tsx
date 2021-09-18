import classNames from "classnames";
export interface TextProps {
  children?: React.ReactNode;
  className?: string;
}

export const SubText: React.FC<TextProps> = ({ children, className }) => (
  <p className={classNames("a-sub-text", className)}>{children}</p>
);
