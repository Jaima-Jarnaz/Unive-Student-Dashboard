import { ActiveProgramsItemDeptName } from "components/atoms/active-programs-item-dept-name";

export interface ActiveProgramsItemDeptProps {
  title: string;
}

export const ActiveProgramsItemDept: React.FC<ActiveProgramsItemDeptProps> = ({
  title,
}) => {
  return (
    <div className="m-active-programs-item-dept">
      <div className="m-active-programs-item-dept__name">
        <ActiveProgramsItemDeptName>{title}</ActiveProgramsItemDeptName>
      </div>
    </div>
  );
};
