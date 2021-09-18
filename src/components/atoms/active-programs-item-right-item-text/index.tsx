import classnames from "classnames";
import { ImgHTMLAttributes } from "react";

type InheritedProps = Pick<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "alt" | "width" | "height"
>;

export interface ActiveProgramsItemRightItemTextProps extends InheritedProps {
  spSrc?: string;
  className?: string;
}

const widthForPc = getComputedStyle(document.documentElement).getPropertyValue(
  "--width-pc"
);

export const ActiveProgramsItemRightItemText: React.FC<ActiveProgramsItemRightItemTextProps> = ({
  className,
  spSrc,
  src,
  ...rest
}) => (
  <picture>
    <source srcSet={src} media={`(min-width: ${widthForPc})`} />
    <img
      className={classnames(
        "a-active-programs-item-right-item-text",
        className
      )}
      src={spSrc || src}
      {...rest}
    />
  </picture>
);
