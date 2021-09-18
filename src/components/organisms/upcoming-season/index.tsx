import { SeasonItem } from "components/molecules/season-item";
import { Date } from "components/molecules/date";

export interface UpcomingSeasonProps {
  text: string;
  sub_text: string;
  time_label: string;
  week: string;
  day: string;
  month: string;
}

export const UpcomingSeason: React.FC<UpcomingSeasonProps> = ({
  text,
  sub_text,
  time_label,
  week,
  day,
  month,
}) => {
  return (
    <div className="o-upcoming-season">
      <div className="o-upcoming-season__date">
        <Date week={week} day={day} month={month}></Date>
      </div>
      <div className="o-upcoming-season__season-item">
        <SeasonItem
          text={text}
          sub_text={sub_text}
          time_label={time_label}
        ></SeasonItem>
      </div>
    </div>
  );
};
