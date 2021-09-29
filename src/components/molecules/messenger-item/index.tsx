import { MessengerRightContent } from "components/molecules/messenger-right-section";
import { ProfilePic } from "components/atoms/profile-pic";
import border from "assets/image/Line.png";
export interface MessageProps {
  modifiers: any;
  themebackgroundcolor?: string;

  name: string;
  messagetext: string;
  timetext: string;
  notification: string;
  src: string;
}
interface MessagePropsItems {
  messageData: MessageProps[];
}

export const MessengerItem: React.FC<MessagePropsItems> = ({
  messageData,
}: MessagePropsItems) => {
  return (
    <>
      {messageData.map((messageData) => {
        return (
          <div className="m-messenger-item">
            <div className="m-messenger-item__content">
              <div className="m-messenger-item__image">
                <ProfilePic
                  profile_img={messageData.src}
                  modifiers="profile_pic"
                />
              </div>
              <div className="m-messenger-item__rightcontent">
                <MessengerRightContent
                  name={messageData.name}
                  text={messageData.messagetext}
                  timetext={messageData.timetext}
                  notificationNum={messageData.notification}
                  modifiers={messageData.modifiers}
                  themebackgroundcolor={messageData.themebackgroundcolor}
                />
              </div>
            </div>
            <div className="m-messenger-item__border"></div>
          </div>
        );
      })}
    </>
  );
};
