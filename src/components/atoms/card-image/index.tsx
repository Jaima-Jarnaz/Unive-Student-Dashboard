import img from "assets/image/img.png";
import { CardCheckedIn } from "components/atoms/card-checked-in";
export interface CardImageProps {
  className: string;
}

export const CardImageContent: React.FC = () => {
  return (
    <div className="a-card-image">
      <div className="a-card-image__content">
        <img className="a-card-image--img" src={img} alt="progress" />
      </div>
      <div className="a-card-image__checkfill">
        <CardCheckedIn />
      </div>
    </div>
  );
};
