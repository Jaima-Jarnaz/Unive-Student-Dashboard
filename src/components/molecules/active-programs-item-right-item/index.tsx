import { ActiveProgramsItemRightItemLogo } from "components/atoms/active-programs-item-right-item-logo";
import { ActiveProgramsItemRightItemText } from "components/atoms/active-programs-item-right-item-text";

export interface ActiveProgramsItemRightItemProps {
  modifiers?: string;
  title: string;
  menuSrc: string;
}

export const ActiveProgramsItemRightItem: React.FC<ActiveProgramsItemRightItemProps> = ({
  modifiers,
  title,
  menuSrc,
}) => {
  return (
    <div className="m-active-programs-item-right-item">
      <div className="m-active-programs-item-right-item__logo">
        <ActiveProgramsItemRightItemLogo spSrc={menuSrc} modifier={modifiers} />
      </div>
      <div className="m-active-programs-item-right-item__text">
        <ActiveProgramsItemRightItemText spSrc={title} />
      </div>
    </div>
  );
};
