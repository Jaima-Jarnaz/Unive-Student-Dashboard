import { MessageText } from "components/atoms/message-text";
//import { Text } from "components/atoms/text-research";
import { MessageTimeNotification } from "components/molecules/message-notification-time";

type Props = {
  modifiers: any;
  text: string;
  name: string;
  children?: React.ReactNode;
  timetext: string;
  notificationNum: string;
};

export const MessengerRightContent: React.FC<Props> = ({
  children,
  text,
  name,
  timetext,
  notificationNum,
  modifiers,
}) => {
  return (
    <div className="m-messenger-right-content">
      <div className="m-messenger-right-content__text">
        <MessageText
          children={name}
          modifiers={modifiers}
          className="m-messenger-right-content__textheading"
        />
        <MessageText
          children={text}
          modifiers={modifiers}
          className="m-messenger-right-content__messagetext"
        />
      </div>
      <div className="m-messenger-right-content__time-notification">
        <MessageTimeNotification
          timetext={timetext}
          notificationNum={notificationNum}
          modifiers={modifiers}
        />
      </div>
    </div>
  );
};
