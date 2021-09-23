import { CardImageContent } from "components/atoms/card-image";
// export interface CardImageProps {
//   className: string;
//   color: string;
// }

export const CardImage: React.FC<any> = ({ modifiers }) => {
  return (
    <div className="m-card-image">
      <CardImageContent modifiers={modifiers} />
    </div>
  );
};
