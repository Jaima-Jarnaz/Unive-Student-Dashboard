import classnames from "classnames";
import { mapModifiers } from "lib/utils";
import { ImgHTMLAttributes } from "react";

type InheritedProps = Pick<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "alt" | "width" | "height"
>;

export interface ActiveProgramsItemRightItemLogoProps extends InheritedProps {
  modifier?: string;
  spSrc?: string;
  className?: string;
}

const widthForPc = getComputedStyle(document.documentElement).getPropertyValue(
  "--width-pc"
);

export const ActiveProgramsItemRightItemLogo: React.FC<ActiveProgramsItemRightItemLogoProps> = ({
  modifier,
  className,
  spSrc,
  src,
  ...rest
}) => (
  <picture>
    <source srcSet={src} media={`(min-width: ${widthForPc})`} />
    <img
      className={classnames(
        mapModifiers("a-active-programs-item-right-item-logo", modifier),
        className
      )}
      src={spSrc || src}
      {...rest}
    />
  </picture>
);
