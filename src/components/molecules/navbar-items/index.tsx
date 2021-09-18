import { NavbarText } from "components/atoms/navbar-text";

type NavItem = {
  title: string;
  url: string;
};

type NavbarItemsProps = {
  navItem: NavItem[];
};

export const NavbarItems: React.FC<NavbarItemsProps> = ({ navItem }) => {
  return (
    <div className="m-navbar">
      {navItem.map(({ title, url }, index) => (
        <>
          <div className="m-navbar__item" key={index}>
            <a href={url} className="m-navbar__item-hover">
              <NavbarText>{title}</NavbarText>
            </a>
          </div>
        </>
      ))}
    </div>
  );
};

export const NavItem: NavItem[] = [
  { title: "Dashboard", url: "#" },
  { title: "Courses", url: "#" },
  { title: "Calendar", url: "#" },
  { title: "Transcripts", url: "#" },
  { title: "Grades", url: "#" },
  { title: "Attendance", url: "#" },
  { title: "Settings", url: "#" },
];
