import classNames from "classnames";
export interface ActiveProgramsItemUniNameProps {
  children?: React.ReactNode;
  className?: string;
}

export const ActiveProgramsItemUniName: React.FC<ActiveProgramsItemUniNameProps> = ({
  children,
  className,
}) => (
  <p className={classNames("a-active-programs-item-uni-name", className)}>
    {children}
  </p>
);
