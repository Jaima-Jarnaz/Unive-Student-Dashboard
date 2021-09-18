import { mapModifiers } from "lib/utils";
import classNames from "classnames";
export interface TextProps {
  children?: React.ReactNode;
  modifiers?: "active-text" | "normal-text";
  className?: string;
}

export const MessageText: React.FC<TextProps> = ({
  children,
  className,
  modifiers,
}) => (
  <p
    className={classNames(mapModifiers("a-message-text", modifiers), className)}
  >
    {children}
  </p>
);
