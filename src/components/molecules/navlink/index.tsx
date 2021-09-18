import { NavDash } from "components/atoms/nav-dash";
import { SideNavLinks, SideMenu } from "components/atoms/navlink";
import banner from "assets/image/banner.png";

type textType = {
  text: string;
};

export const SideNav: React.FC = () => {
  return (
    <div className="m-sidenav">
      <NavDash></NavDash>
      <div className="m-sidenav__linkcontent">
        <SideNavLinks menu={SideMenu} />
      </div>
      <div className="m-sidenav__banner">
        <img src={banner} alt="credit" />
      </div>
    </div>
  );
};
