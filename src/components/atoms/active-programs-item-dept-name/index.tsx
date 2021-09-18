import classNames from "classnames";
export interface ActiveProgramsItemDeptNameProps {
  children?: React.ReactNode;
  className?: string;
}

export const ActiveProgramsItemDeptName: React.FC<ActiveProgramsItemDeptNameProps> = ({
  children,
  className,
}) => (
  <p className={classNames("a-active-programs-item-dept-name", className)}>
    {children}
  </p>
);
