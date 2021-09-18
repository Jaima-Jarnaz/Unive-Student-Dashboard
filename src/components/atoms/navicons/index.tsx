import logo from "assets/image/logo.png";
import dashboard from "assets/image/dashboard.png";
import Courses from "assets/image/Courses.png";
import Materials from "assets/image/Materials.png";
import Transcripts from "assets/image/Transcripts.png";
import Grades from "assets/image/Grades.png";
import Attendance from "assets/image/Attendance.png";
import Settings from "assets/image/Settings.png";
import { NavDash } from "components/atoms/nav-dash";
type SideMenuImageProps = {
  src: string;
};
type NavbarProps = {
  menu: SideMenuImageProps[];
};
var id = 0;
export const SideNavImages: React.FC<NavbarProps> = ({ menu }) => (
  <>
    {menu.map(({ src }, id) => (
      <div className="a-sidenavimage">
        <div className="a-sidenavimage__imgcontainer">
          <NavDash modifiers="tabnav" />
          <img
            className={`a-sidenavimage__image a-sidenavimage__image--logo-${id++}`}
            // id={`a-sidenavlink--img-${id++}`}
            src={src}
            alt="navblink"
          />
        </div>
      </div>
    ))}
  </>
);

export const SideMenu: SideMenuImageProps[] = [
  { src: logo },
  { src: dashboard },
  { src: Courses },
  { src: Materials },
  { src: Transcripts },
  { src: Grades },
  { src: Attendance },
  { src: Settings },
];
