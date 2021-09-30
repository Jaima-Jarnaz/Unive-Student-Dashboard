import { mapModifiers } from "lib/utils";
import classNames from "classnames";

export interface DateProps {
  week: string;
  day: string;
  month: string;
  textColor: string;
}

export const Date: React.FC<DateProps> = ({ week, day, month, textColor }) => {
  return (
    <div className="m-date">
      <div
        className={classNames(
          mapModifiers("m-date__week", textColor),
          classNames
        )}
      >
        {week}
      </div>
      <div className="m-date__day">{day}</div>
      <div className="m-date__month">{month}</div>
    </div>
  );
};
