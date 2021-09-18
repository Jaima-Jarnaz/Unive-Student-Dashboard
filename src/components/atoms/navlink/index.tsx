import dashboard from "assets/image/dashboard.png";
import Courses from "assets/image/Courses.png";
import Materials from "assets/image/Materials.png";
import Transcripts from "assets/image/Transcripts.png";
import Grades from "assets/image/Grades.png";
import Attendance from "assets/image/Attendance.png";
import Settings from "assets/image/Settings.png";
type SideMenu = {
  title: string;
  url: string;
  src: string;
};
type NavbarProps = {
  menu: SideMenu[];
};
var id = 1;
export const SideNavLinks: React.FC<NavbarProps> = ({ menu }) => (
  <>
    {menu.map(({ title, url, src }, id) => (
      <div className="a-sidenavlink">
        {/* <span></span> */}
        <div>
          <img
            className="a-sidenavlink__image"
            id={`a-sidenavlink--img-${id++}`}
            src={src}
            alt="navblink"
          />
        </div>
        <div className="a-sidenavlink__item" key={id}>
          <a
            className="a-sidenavlink__itemlink"
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
  { title: "Dashboard", url: "#", src: dashboard },
  { title: "Courses", url: "#", src: Courses },
  { title: "Materials", url: "#", src: Materials },
  { title: "Transcripts", url: "#", src: Transcripts },
  { title: "Grades", url: "#", src: Grades },
  { title: "Attendance", url: "#", src: Attendance },
  { title: "Settings", url: "#", src: Settings },
];
