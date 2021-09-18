import classNames from "classnames";
export interface Heading3TextProps {
  children: React.ReactNode;
  className?: string;
  style?: string;
}

export const Heading3Text: React.FC<Heading3TextProps> = ({
  children,
  className,
  style,
}) => (
  <h3 className={classNames("a-heading3", className)} style={{ color: style }}>
    {children}
  </h3>
);
