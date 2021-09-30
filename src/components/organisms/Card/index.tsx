import { CardDescription } from "components/molecules/card-description";
import { CardImage } from "components/molecules/card-image";
import { mapModifiers } from "lib/utils";
import classNames from "classnames";

export interface UXProps {
  modifiers: string;
  textColor?: string;
}

export const Card: React.FC<any> = ({ modifiers, textColor }) => {
  const cardData = [
    {
      headingtext: "UX Research - Week 3",
      subheadingtext: "CERTIFICATE UX/UI design",
      link: "Join now",
      date: "08",
      month: "April",
      status: "In Progress",
      href: "jaima",
      textColor: textColor,
    },
  ];

  return (
    <div className="o-card">
      <div className="o-card__left-content">
        <CardImage className="item" modifiers={modifiers} />
      </div>
      <div className="o-card__right-content">
        <CardDescription cardData={cardData} textColor={textColor} />
      </div>
    </div>
  );
};
