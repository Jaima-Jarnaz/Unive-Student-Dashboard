import { CardImageContent } from "components/atoms/card-image";
export interface CardImageProps {
  className: string;
}

export const CardImage: React.FC<CardImageProps> = ({ className }) => {
  return (
    <div className="m-card-image">
      <CardImageContent />
    </div>
  );
};
