import { CardDescription } from "components/molecules/card-description";
import { CardImage } from "components/molecules/card-image";

export const Card: React.FC<any> = () => {
  const cardData = [
    {
      headingtext: "UX Research - Week 3",
      subheadingtext: "CERTIFICATE UX/UI design",
      link: "Join now",
      date: "08",
      month: "April",
      status: "In Progress",
      href: "mk",
    },
  ];

  return (
    <div className="o-card">
      <div className="o-card__left-content">
        <CardImage className="item" />
      </div>
      <div className="o-card__right-content">
        <CardDescription cardData={cardData} />
      </div>
    </div>
  );
};
