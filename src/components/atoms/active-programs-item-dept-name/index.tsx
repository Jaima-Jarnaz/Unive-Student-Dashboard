import classNames from "classnames";
import BgColor from "components/atoms/bg-color";
import { mapModifiers } from "lib/utils";
export interface ActiveProgramsItemDeptNameProps {
  children?: React.ReactNode;
  className?: string;
  bgColor: string;
}

export const ActiveProgramsItemDeptName: React.FC<ActiveProgramsItemDeptNameProps> = ({
  children,
  className,
  bgColor,
}) => (
  <p
    className={classNames(
      mapModifiers("a-active-programs-item-dept-name", bgColor),
      className
    )}
  >
    {children}
  </p>
);
