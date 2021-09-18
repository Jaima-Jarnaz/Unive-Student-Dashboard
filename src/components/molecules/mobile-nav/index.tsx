import { MobileNavLinks, SideMenu } from "components/atoms/mobile-navlink";

type textType = {
  text: string;
};

export const MobileNav: React.FC = () => {
  return (
    <div className="m-nav-bottom">
      <div className="m-nav-bottom__linkcontent">
        <MobileNavLinks menu={SideMenu} />
      </div>
    </div>
  );
};
