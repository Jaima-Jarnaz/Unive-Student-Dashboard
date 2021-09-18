import { SearchBarLeft } from "components/molecules/searchbar-left";
import { SearchBarRight } from "components/molecules/searchbar-right";
import line from "../../../assets/images/line.png";

export const Searchbar: React.FC = ({}) => {
  // const [click, setClick] = useState(true);
  // const handleNavbar = () => {
  //   setClick(!click);
  // };

  return (
    <div className="o-searchbar">
      <div className="o-searchbar__left">
        <SearchBarLeft search_placeholder="Search course, student or instructor"></SearchBarLeft>
      </div>
      <img className="o-searchbar__line" src={line} alt="line Icon" />
      <div className="o-searchbar__right">
        <SearchBarRight
          profile_name="Mia V"
          profile_designation="Student"
        ></SearchBarRight>
      </div>
    </div>
  );
};
