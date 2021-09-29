import classNames from "classnames";
import { mapModifiers } from "lib/utils";
export interface TextProps {
  children?: React.ReactNode;
  className?: string;
  themebackgroundcolor?: string;
}

export const MessageNotificationCircle: React.FC<TextProps> = ({
  children,
  className,
  themebackgroundcolor,
}) => (
  <div
    className={classNames(
      mapModifiers("a-notification-circle", themebackgroundcolor),
      className
    )}
  >
    <p className="a-notification-circle__text">{children}</p>
  </div>
);
