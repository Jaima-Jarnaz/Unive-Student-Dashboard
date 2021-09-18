import { SideNav } from "components/molecules/navlink";
import { NavLogo } from "components/molecules/navlogo";
import { MobileNav } from "components/molecules/mobile-nav";
import bordernav from "assets/image/bordermobile.png";

export const SideNavBar: React.FC = () => {
  return (
    <>
      <div className="o-sidenav">
        <div className="o-sidenav__contentlogo">
          <NavLogo />
        </div>
        <div className="o-sidenav__contentlink">
          <SideNav />
        </div>
      </div>
      {/* <div className="o-sidenav__container-mobilenav">
        <MobileNav />
      </div> */}
    </>
  );
};
