import classNames from "classnames";
import { mapModifiers } from "lib/utils";

export interface ThemeColorDivProps {
  modifiers:
    | "theme-lightgreen"
    | "theme-skyblue"
    | "theme-orange"
    | "theme-purple";

  className?: string;
  children?: string;
}

export const ThemeColorDiv: React.FC<ThemeColorDivProps> = ({
  modifiers,
  className,
}) => (
  <div
    className={classNames(mapModifiers("a-theme-div", modifiers), className)}
  ></div>
);
