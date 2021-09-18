import classNames from "classnames";
import { mapModifiers } from "lib/utils";
export interface SpanProps {
  children?: React.ReactNode;
  modifiers?: "bottom-nav-dash" | "tabnav";
  className?: string;
  style?: string;
}

export const NavDash: React.FC<SpanProps> = ({
  children,
  className,
  modifiers,
  style,
}) => (
  <span
    className={classNames(mapModifiers("a-span", modifiers), className)}
    style={{ color: style }}
  >
    {children}
  </span>
);
