import classnames from "classnames";
import { ImgHTMLAttributes } from "react";

type InheritedProps = Pick<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "alt" | "width" | "height"
>;

export interface ActiveProgramsItemRightItemLogoLastProps
  extends InheritedProps {
  spSrc?: string;
  className?: string;
}

const widthForPc = getComputedStyle(document.documentElement).getPropertyValue(
  "--width-pc"
);

export const ActiveProgramsItemRightItemLogoLast: React.FC<ActiveProgramsItemRightItemLogoLastProps> = ({
  className,
  spSrc,
  src,
  ...rest
}) => (
  <picture>
    <source srcSet={src} media={`(min-width: ${widthForPc})`} />
    <img
      className={classnames(
        "a-active-programs-item-right-item-logo-last",
        className
      )}
      src={spSrc || src}
      {...rest}
    />
  </picture>
);
