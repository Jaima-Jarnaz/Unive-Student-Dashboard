import { ActiveProgramsHeading } from "components/atoms/active-programs-heading";
import { ActiveProgramsHeadingMenu } from "components/atoms/active-programs-heading-menu";

export interface ActiveProgramsTopProps {
  title: string;
  menuSrc: string;
}

export const ActiveProgramsTop: React.FC<ActiveProgramsTopProps> = ({
  title,
  menuSrc,
}) => {
  return (
    <div className="m-active-programs-top">
      <div className="m-active-programs-top__left">
        <ActiveProgramsHeading>{title}</ActiveProgramsHeading>
      </div>
      <div className="m-active-programs-top__right">
        <ActiveProgramsHeadingMenu spSrc={menuSrc} />
      </div>
    </div>
  );
};
