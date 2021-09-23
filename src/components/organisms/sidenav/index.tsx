import { SideNav } from "components/molecules/navlink";
import { NavLogo } from "components/molecules/navlogo";
import { MobileNav } from "components/molecules/mobile-nav";
import bordernav from "assets/image/bordermobile.png";
import { mapModifiers } from "lib/utils";
import classNames from "classnames";

export interface SideNavProps {
  modifiers: string | null;
  className?: string;
}

export const SideNavBar: React.FC<SideNavProps> = ({
  modifiers,
  className,
}) => {
  return (
    <>
      <div
        className={classNames(mapModifiers("o-sidenav", modifiers), className)}
      >
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
