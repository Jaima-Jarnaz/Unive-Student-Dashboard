import { MessageActiveTimeText } from "components/atoms/message-active-time";
import { MessageNotificationCircle } from "components/atoms/message-notification";
import classNames from "classnames";

export interface MessageProps {
  children?: React.ReactNode;
  className?: string;
  timetext: string;
  notificationNum: string;
  themebackgroundcolor?: string;
}

export const MessageTimeNotification: React.FC<MessageProps> = ({
  children,
  className,
  timetext,
  notificationNum,
  themebackgroundcolor,
}) => (
  <div className="m-message-time-notification">
    <div>
      <MessageActiveTimeText>{timetext}</MessageActiveTimeText>
    </div>
    <div>
      <MessageNotificationCircle
        children={notificationNum}
        themebackgroundcolor={themebackgroundcolor}
      />
    </div>
  </div>
);
