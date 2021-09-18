import { MessengerTopIcon } from "components/atoms/messenger-top-icon";
import { MessengerTopText } from "components/atoms/messenger-top-text";
import { ProfilePic } from "components/atoms/profile-pic";

export interface MessengerTopProps {
  modifiers: any;
  profilePic: string;
  headingText: string;
  searchIconSrc: string;
  createIconSrc: string;
  menuIconSrc: string;
  hideIconSrc: string;
}

export const MessengerTop: React.FC<MessengerTopProps> = ({
  modifiers,
  profilePic,
  headingText,
  searchIconSrc,
  createIconSrc,
  menuIconSrc,
  hideIconSrc,
}) => {
  return (
    <div className="m-messenger-top">
      <div className="m-messenger-top__left">
        <div className="m-messenger-top__left__first">
          <ProfilePic profile_img={profilePic} modifiers={modifiers} />
        </div>
        <div className="m-messenger-top__left__second">
          <MessengerTopText>{headingText}</MessengerTopText>
        </div>
      </div>
      <div className="m-messenger-top__right">
        <div className="m-messenger-top__right__first">
          <MessengerTopIcon modifier="search" spSrc={searchIconSrc} />
        </div>
        <div className="m-messenger-top__right__second">
          <MessengerTopIcon modifier="create" spSrc={createIconSrc} />
        </div>
        <div className="m-messenger-top__right__third">
          <MessengerTopIcon modifier="menu" spSrc={menuIconSrc} />
        </div>
        <div className="m-messenger-top__right__fourth">
          <MessengerTopIcon modifier="hide" spSrc={hideIconSrc} />
        </div>
      </div>
    </div>
  );
};
