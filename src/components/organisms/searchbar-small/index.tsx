import mobile_logo from "../../../assets/icons/mobile_logo.png";
import { SearchIcon } from "components/atoms/search-icon";
import { SearchPlaceholder } from "components/atoms/search-placeholder";
import profilePic from "../../../assets/images/profilePic.png";
import { MessengerIcon } from "components/atoms/messenger-icon";
import { ProfilePic } from "components/atoms/profile-pic";
import { useState } from "react";
import { MessengerTop } from "components/molecules/messenger-top";
import { MyDayItem } from "components/molecules/my-day-items";
import { ItemMessenger } from "components/organisms/messenger-item";

export const SearchbarSmall: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleMessenger = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="o-searchbar-small">
        <div className="o-searchbar-small__logo">
          <img
            className="o-searchbar-small__logo-size"
            src={mobile_logo}
            alt="oval pic"
          />
        </div>
        <div className="o-searchbar-small__content">
          <div className="o-searchbar-small__content-search">
            <div className="o-searchbar-small__content-search-box">
              <SearchIcon></SearchIcon>
              <SearchPlaceholder>Search</SearchPlaceholder>
            </div>
          </div>
          <div className="o-searchbar-small__content-profile">
            <button onClick={handleMessenger}>
              <MessengerIcon></MessengerIcon>
            </button>
            <ProfilePic profile_img={profilePic}></ProfilePic>
          </div>
        </div>
      </div>

      {click && (
        <div className="o-searchbar-small-messenger">
          <div className="o-searchbar-small-messenger__top">
            <MessengerTop
              modifiers="messenger_pic"
              profilePic="src/assets/images/messenger-top-profile.png"
              headingText="Messaging"
              searchIconSrc="src/assets/images/messenger-top-search.png"
              createIconSrc="src/assets/images/messenger-top-create.png"
              menuIconSrc="src/assets/images/messenger-top-menu.png"
              hideIconSrc="src/assets/images/messenger-top-hide.png"
            />
          </div>
          <div className="o-searchbar-small-messenger__myday">
            <MyDayItem></MyDayItem>
            <div className="o-searchbar-small-messenger__myday-border"></div>
          </div>
          <div className="o-searchbar-small-messenger__message-section">
            <ItemMessenger />
          </div>
        </div>
      )}
    </>
  );
};
