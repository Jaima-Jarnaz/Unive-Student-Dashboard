import { ActiveProgramsItemDeptName } from "components/atoms/active-programs-item-dept-name";

export interface ActiveProgramsItemDeptProps {
  title: string;
  bgColor: string;
}

export const ActiveProgramsItemDept: React.FC<ActiveProgramsItemDeptProps> = ({
  title,
  bgColor,
}) => {
  return (
    <div className="m-active-programs-item-dept">
      <div className="m-active-programs-item-dept__name">
        <ActiveProgramsItemDeptName bgColor={bgColor}>
          {title}
        </ActiveProgramsItemDeptName>
      </div>
    </div>
  );
};
