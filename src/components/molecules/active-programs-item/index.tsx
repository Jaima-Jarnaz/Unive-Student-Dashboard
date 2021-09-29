import { ActiveProgramsItemLogo } from "components/atoms/active-programs-item-logo";
import { ActiveProgramsItemUniName } from "components/atoms/active-programs-item-uni-name";
import { ActiveProgramsItemDept } from "../active-programs-item-dept";
import { ActiveProgramsItemRightItem } from "../active-programs-item-right-item";
import { ActiveProgramsItemRightItemLast } from "../active-programs-item-right-item-last";

export interface ActiveProgramsItemProps {
  modifier?: string;
  logoSrc: string;
  deptName: string;
  bgColor: string;
  uniName: string;
  rightItemFirstLogo: string;
  rightItemFirstText: string;
  rightItemSecondLogo: string;
  rightItemSecondText: string;
  rightItemThirdLogo: string;
  rightItemThirdText: string;
  rightItemFourthLogo: string;
  rightItemFourthText: string;
}

export const ActiveProgramsItem: React.FC<ActiveProgramsItemProps> = ({
  modifier,
  logoSrc,
  deptName,
  bgColor,
  uniName,
  rightItemFirstLogo,
  rightItemFirstText,
  rightItemSecondLogo,
  rightItemSecondText,
  rightItemThirdLogo,
  rightItemThirdText,
  rightItemFourthLogo,
  rightItemFourthText,
}) => {
  return (
    <div className="m-active-programs-item">
      <div className="m-active-programs-item__logo">
        <ActiveProgramsItemLogo spSrc={logoSrc} />
      </div>
      <div className="m-active-programs-item__middle">
        <div className="m-active-programs-item__middle__dept-name">
          <ActiveProgramsItemDept title={deptName} bgColor={bgColor} />
        </div>
        <div className="m-active-programs-item__middle__uni-name">
          <ActiveProgramsItemUniName>{uniName}</ActiveProgramsItemUniName>
        </div>
      </div>
      <div className="m-active-programs-item__right">
        <div className="m-active-programs-item__right__item">
          <ActiveProgramsItemRightItem
            title={rightItemFirstText}
            menuSrc={rightItemFirstLogo}
          />
        </div>
        <div className="m-active-programs-item__right__item">
          <ActiveProgramsItemRightItem
            title={rightItemSecondText}
            menuSrc={rightItemSecondLogo}
          />
        </div>
        <div className="m-active-programs-item__right__item">
          <ActiveProgramsItemRightItem
            title={rightItemThirdText}
            menuSrc={rightItemThirdLogo}
            modifiers={modifier}
          />
        </div>
        <div className="m-active-programs-item__right__item-last">
          <ActiveProgramsItemRightItemLast
            title={rightItemFourthText}
            menuSrc={rightItemFourthLogo}
          />
        </div>
      </div>
    </div>
  );
};
