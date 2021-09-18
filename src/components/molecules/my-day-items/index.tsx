import { AddPlus } from "components/atoms/add-plus-pic";
import { MyDayText } from "components/atoms/my-day-text";
import { ProfilePic } from "components/atoms/profile-pic";

//import myday profile pic
import myday1 from "../../../assets/images/myday1.png";
import myday2 from "../../../assets/images/myday2.png";
import myday3 from "../../../assets/images/myday3.png";
import myday4 from "../../../assets/images/myday4.png";

export const MyDayItem: React.FC = () => {
  return (
    <div className="m-my-day-item">
      <div className="m-my-day-item__add">
        <div className="m-my-day-item__add-icon">
          <AddPlus></AddPlus>
        </div>
        <div className="m-my-day-item__add-text">
          <MyDayText>Add</MyDayText>
        </div>
      </div>
      <div className="m-my-day-item__users">
        <div className="m-my-day-item__users-user">
          <ProfilePic profile_img={myday1} modifiers="myDay_pic"></ProfilePic>
          <MyDayText>Dianne</MyDayText>
        </div>
        <div className="m-my-day-item__users-user">
          <ProfilePic profile_img={myday2} modifiers="myDay_pic"></ProfilePic>
          <MyDayText>Jarvis</MyDayText>
        </div>
        <div className="m-my-day-item__users-user">
          <ProfilePic profile_img={myday3} modifiers="myDay_pic"></ProfilePic>
          <MyDayText>Miles</MyDayText>
        </div>
        <div className="m-my-day-item__users-user">
          <ProfilePic profile_img={myday4} modifiers="myDay_pic"></ProfilePic>
          <MyDayText>Sui</MyDayText>
        </div>
      </div>
    </div>
  );
};
