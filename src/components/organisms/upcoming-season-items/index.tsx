import React, { HTMLAttributes, ReactNode } from "react";
import { UpcomingSeasonAllText } from "components/atoms/upcoming-season-all-text";
import { UpcomingSeasonText } from "components/atoms/upcoming-season-text";
import { UpcomingSeasonTitle } from "components/atoms/upcoming-season-title";
import { UpcomingSeason } from "components/organisms/upcoming-season";

export interface UpcomingSeasonItemsProps {
  textColor: string | null;
}
export const UpcomingSeasonItems: React.FC<UpcomingSeasonItemsProps> = ({
  textColor,
}) => {
  return (
    <div className="o-upcoming-season-items">
      <div className="o-upcoming-season-items__heading">
        <UpcomingSeasonText>Upcoming Season:</UpcomingSeasonText>
      </div>

      <div className="o-upcoming-season-items__title">
        <div className="o-upcoming-season-items__title-date">
          <UpcomingSeasonTitle>Date</UpcomingSeasonTitle>
        </div>
        <div className="o-upcoming-season-items__title-class">
          <UpcomingSeasonTitle>Class</UpcomingSeasonTitle>
        </div>
        <div className="o-upcoming-season-items__title-time">
          <UpcomingSeasonTitle>Time</UpcomingSeasonTitle>
        </div>
      </div>

      <div className="o-upcoming-season-items__content">
        <UpcomingSeason
          text="AI and Machine Learning"
          sub_text="Master of Computer Science"
          time_label="8:30am-1:00pm"
          week="Tomorrow"
          day="09"
          month="APRIL"
          textColor={`${textColor}`}
        ></UpcomingSeason>
        <hr className="o-upcoming-season-items__dash" />
        <UpcomingSeason
          text="Database and Information Systems"
          sub_text="Master of Computer Science"
          time_label="9:00am-2:30pm"
          week="Wed"
          day="10"
          month="APRIL"
          textColor={`${textColor}`}
        ></UpcomingSeason>
        <hr className="o-upcoming-season-items__dash" />
        <UpcomingSeason
          text="Definition & Ideation"
          sub_text="Certificate UX/UI Design"
          time_label="3:00pm-7:30pm"
          week="Mon"
          day="18"
          month="DECEMBER"
          textColor={`${textColor}`}
        ></UpcomingSeason>
      </div>

      <div className="o-upcoming-season-items__all">
        <UpcomingSeasonAllText>See All Sessions</UpcomingSeasonAllText>
      </div>
    </div>
  );
};
