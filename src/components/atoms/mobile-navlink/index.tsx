import dashboardmb from "assets/image/dashboard-mb.png";
import Courses from "assets/image/Courses-mb.png";
import Notification from "assets/image/Notification.png";
import Settings from "assets/image/settings-mb.png";
import { NavDash } from "components/atoms/nav-dash";
type SideMenu = {
  title: string;
  url: string;
  src: string;
};
type NavbarProps = {
  menu: SideMenu[];
};
var id = 1;
export const MobileNavLinks: React.FC<NavbarProps> = ({ menu }) => (
  <>
    <NavDash modifiers="bottom-nav-dash"></NavDash>
    {menu.map(({ title, url, src }, id) => (
      <div className="a-mobilenavlink">
        {/* <span></span> */}
        <div>
          <img
            className="a-mobilenavlink__image"
            id={`a-mobilenavlink--img-${id++}`}
            src={src}
            alt="navblink"
          />
        </div>
        <div className="a-mobilenavlink__item" key={id}>
          <a
            className="a-mobilenavlink__itemlink"
            id={`--link-${id++}`}
            href={url}
          >
            {title}
          </a>
        </div>
      </div>
    ))}
  </>
);

export const SideMenu: SideMenu[] = [
  { title: "Dashboard", url: "#", src: dashboardmb },
  { title: "Courses", url: "#", src: Courses },
  { title: "Notifications", url: "#", src: Notification },
  { title: "Settings", url: "#", src: Settings },
];
