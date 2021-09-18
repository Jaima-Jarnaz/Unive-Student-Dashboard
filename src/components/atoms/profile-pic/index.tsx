import { mapModifiers } from "lib/utils";
import classNames from "classnames";

export interface ProfilePicProps {
  profile_img: string;
  modifiers?: "messenger_pic" | "profile_pic" | "searchBar_pic" | "myDay_pic";
  className?: string;
}

export const ProfilePic: React.FC<ProfilePicProps> = ({
  profile_img,
  modifiers,
  className,
}) => (
  <img
    className={classNames(mapModifiers("a-profile-pic", modifiers), className)}
    src={profile_img}
    alt="profile pic"
  />
);
