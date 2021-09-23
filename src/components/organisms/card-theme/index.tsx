import { Card } from "components/organisms/Card";
import { mapModifiers } from "lib/utils";
import { useState, useEffect, SetStateAction } from "react";
import classNames from "classnames";

export interface ThemeColorProps {
  modifiers?: "theme-green" | "theme-yellow" | "theme-purple";
  className?: string;
}

export const CardThemeColor: React.FC<ThemeColorProps> = ({
  modifiers,
  className,
}) => {
  const [colorTheme, setColorTheme] = useState<string | null>("theme-pink");

  useEffect(() => {
    const currentTheme = localStorage.getItem("themecolor");
    if (currentTheme) {
      setColorTheme(currentTheme);
    }
  }, []);

  const handleClick = (theme: string) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);
  };

  return (
    <div className="o-card-theme">
      <div
        className="o-card-theme__left-content"
        // style={{ backgroundColor: color }}
      >
        <div className="o-card-theme__colortheme">
          <div className="o-card-theme__common">
            <div
              className="o-card-theme__theme-green"
              onClick={() => {
                handleClick("theme-green");
              }}
            ></div>
          </div>
          <div className="o-card-theme__common">
            <div
              className="o-card-theme__theme-yellow"
              onClick={() => {
                handleClick("theme-yellow");
              }}
            ></div>
          </div>
          <div className="o-card-theme__common">
            <div
              className="o-card-theme__theme-purple "
              onClick={() => {
                handleClick("theme-purple");
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        // className={classNames(
        //   mapModifiers(`o-card-theme__right-content`, colorTheme),
        //   className
        // )}
        //className="o-card-theme__right-content"
        className="o-card-theme__right-content"
      >
        {/* <Card modifiers={`${colorTheme}`} /> */}
        <Card modifiers={colorTheme} />
      </div>
    </div>
  );
};
