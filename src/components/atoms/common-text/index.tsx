import classNames from "classnames";
import { useState } from "react";

export interface CommonTextProps {
  //children?: React.ReactNode;
  text: string;
  className?: string;
}

export const CommonText: React.FC<CommonTextProps> = ({ text, className }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <p className={classNames("a-common-text", className)}>
        {!click && text.substring(0, 150).concat(". . .")}
        {click && text}
        {!click && (
          <span>
            <button onClick={handleClick} className="a-common-text__readmore">
              Read More{" "}
              <span className="a-common-text__readmore--sign">&gt;</span>
            </button>
          </span>
        )}
        {click && (
          <span>
            <button onClick={handleClick} className="a-common-text__readmore">
              Show Less{" "}
              <span className="a-common-text__readmore--sign">&lt;</span>
            </button>
          </span>
        )}
      </p>
    </div>
  );
};
