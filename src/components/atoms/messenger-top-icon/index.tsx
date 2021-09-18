import classnames from "classnames";
import { mapModifiers } from "lib/utils";
import { ImgHTMLAttributes } from "react";

type InheritedProps = Pick<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "alt" | "width" | "height"
>;

export interface MessengerTopIconProps extends InheritedProps {
  spSrc?: string;
  className?: string;
  modifier?: "search" | "create" | "menu" | "hide";
}

const widthForPc = getComputedStyle(document.documentElement).getPropertyValue(
  "--width-pc"
);

export const MessengerTopIcon: React.FC<MessengerTopIconProps> = ({
  className,
  modifier,
  spSrc,
  src,
  ...rest
}) => (
  <picture>
    <source srcSet={src} media={`(min-width: ${widthForPc})`} />
    <img
      className={classnames(
        mapModifiers("a-messenger-top-icon", modifier),
        className
      )}
      src={spSrc || src}
      {...rest}
    />
  </picture>
);
