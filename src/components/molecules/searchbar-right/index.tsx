import { MessengerIcon } from "components/atoms/messenger-icon";
import { NotificationIcon } from "components/atoms/notification-icon";
import { ProfileDesignation } from "components/atoms/profile-designation";
import { ProfileName } from "components/atoms/profile-name";
import { ProfilePic } from "components/atoms/profile-pic";
import { ThreeDot } from "components/atoms/three-dot";
import profilePic from "../../../assets/images/profilePic.png";
import menu from "../../../assets/icons/menu.png";

export interface SearchBarRightProps {
  profile_name: string;
  profile_designation: string;
}

export const SearchBarRight: React.FC<SearchBarRightProps> = ({
  profile_name,
  profile_designation,
}) => {
  return (
    <div className="m-searchbar-right">
      <div className="m-searchbar-right__icon">
        <MessengerIcon></MessengerIcon>
        <NotificationIcon></NotificationIcon>
      </div>

      <div className="m-searchbar-right__profile">
        <ProfilePic
          profile_img={profilePic}
          modifiers="searchBar_pic"
        ></ProfilePic>
        <div className="m-searchbar-right__profile-info">
          <ProfileName>{profile_name}</ProfileName>
          <ProfileDesignation>{profile_designation}</ProfileDesignation>
        </div>
      </div>

      <div className="m-searchbar-right__icons">
        <div className="m-searchbar-right__icons-dot">
          <ThreeDot></ThreeDot>
        </div>
        <div className="m-searchbar-right__icons-menu">
          <button>
            <img
              className="m-searchbar-right__icons-menu-button"
              src={menu}
              alt="menu"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
