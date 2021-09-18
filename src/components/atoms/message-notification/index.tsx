import classNames from "classnames";
import { mapModifiers } from "lib/utils";
export interface TextProps {
  children?: React.ReactNode;
  className?: string;
  modifiers: any;
}

export const MessageNotificationCircle: React.FC<TextProps> = ({
  children,
  className,
  modifiers,
}) => (
  <div
    className={classNames(
      mapModifiers("a-notification-circle", modifiers),
      className
    )}
  >
    <p className="a-notification-circle__text">{children}</p>
  </div>
);
