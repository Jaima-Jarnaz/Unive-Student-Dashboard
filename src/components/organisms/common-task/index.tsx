import { CommonImage } from "components/atoms/common-image";
import { CommonArea } from "components/molecules/common-area";
import vector152 from "../../../assets/images/vector152.png";

export interface CommonTaskItemProps {
  title: string;
  text: string;
}

export const CommonTaskItem: React.FC<CommonTaskItemProps> = ({
  title,
  text,
}) => {
  return (
    <div className="o-common">
      <div className="o-common__sideBar">
        <img
          className="o-common__sideBar-vector-img"
          src={vector152}
          alt="vector images"
        />
        <p className="o-common__sideBar-rotateText">ISO9001</p>
      </div>

      <div className="o-common__task">
        <div className="o-common__task-image-overlay">
          <CommonImage></CommonImage>
        </div>
        <div className="o-common__task-area">
          <div className="o-common__task-area-filler"></div>
          <div className="o-common__task-area-mainItem">
            <CommonArea title={title} text={text}></CommonArea>
          </div>
          <div className="o-common__task-filler"></div>
        </div>
      </div>
    </div>
  );
};
