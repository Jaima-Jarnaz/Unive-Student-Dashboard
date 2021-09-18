import addPic from "../../../assets/icons/Oval.png";
import plusPic from "../../../assets/icons/plus.png";

export const AddPlus: React.FC = () => (
  <div className="a-icon">
    <img className="a-icon-add" src={addPic} alt="oval pic" />
    <img className="a-icon-plus" src={plusPic} alt="plus pic" />
  </div>
);
