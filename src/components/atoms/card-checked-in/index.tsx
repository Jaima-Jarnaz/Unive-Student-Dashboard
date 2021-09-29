import checked from "assets/image/checked.png";
import classNames from "classnames";
import { mapModifiers } from "lib/utils";
export interface CheckedProps {
  modifiers?:
    | "theme-green"
    | "theme-skyblue"
    | "theme-purple"
    | "theme-darkpink"
    | "theme-lightpurple"
    | "theme-darkmegenda"
    | "theme-lightpurple"
    | "theme-lightgreen"
    | "theme-orange";
  className?: string;
}

export const CardCheckedIn: React.FC<CheckedProps> = ({
  modifiers,
  className,
}) => {
  return (
    <div
      // className={`a-card-checkedin a-card-checkedin--bgcolor-${props.color}`}
      className={classNames(
        mapModifiers("a-card-checkedin", modifiers),
        className
      )}
    >
      <div className="a-card-checkedin__img-content">
        <img
          className="a-card-checkedin__checkedimg"
          src={checked}
          alt="progress"
        />
      </div>

      <span className="a-card-checkedin__checktext">Checked In</span>
    </div>
  );
};
