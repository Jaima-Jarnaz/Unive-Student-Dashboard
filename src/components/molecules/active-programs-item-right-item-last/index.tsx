import { ActiveProgramsItemRightItemLogoLast } from "components/atoms/active-programs-item-right-item-logo-last";
import { ActiveProgramsItemRightItemTextLast } from "components/atoms/active-programs-item-right-item-text-last";

export interface ActiveProgramsItemRightItemLastProps {
  title: string;
  menuSrc: string;
}

export const ActiveProgramsItemRightItemLast: React.FC<ActiveProgramsItemRightItemLastProps> = ({
  title,
  menuSrc,
}) => {
  return (
    <div className="m-active-programs-item-right-item-last">
      <div className="m-active-programs-item-right-item-last__logo">
        <ActiveProgramsItemRightItemLogoLast spSrc={menuSrc} />
      </div>
      <div className="m-active-programs-item-right-item-last__text">
        <ActiveProgramsItemRightItemTextLast spSrc={title} />
      </div>
    </div>
  );
};
