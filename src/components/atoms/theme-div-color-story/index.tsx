import classNames from "classnames";
import { mapModifiers } from "lib/utils";

export interface ThemeColorDivProps {
  modifiers: string;

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
