import { Heading3Text } from "components/atoms/heading-3";
import { Status } from "components/atoms/status";
import { LinkCard } from "components/atoms/link-card";
import { Date } from "components/atoms/date";
import { CardHeading } from "components/atoms/card-heading";
import { mapModifiers } from "lib/utils";

export interface CardProps {
  headingtext: string;
  subheadingtext: string;
  href: string;
  link: string;
  date: string;
  month: string;
  status: string;
}
export interface CardPropsItems {
  cardData: CardProps[];
  modifiers?: "theme-green" | "theme-yellow" | "theme-purple";
}

export const CardDescription: React.FC<CardPropsItems> = ({
  cardData,
  modifiers,
}: CardPropsItems) => {
  return (
    <div className="m-card-description">
      {cardData.map((cardData) => {
        return (
          <div key={cardData.status} className="m-card-description__content">
            <div className="m-card-description__left-content">
              <div className="m-card-description__text-content">
                <CardHeading />
              </div>
              <div className="m-card-description__progress">
                <Status text={cardData.status}></Status>
              </div>
            </div>

            <div className="m-card-description__right-content">
              <div className="m-card-description__container">
                <div className="m-card-description__date-content">
                  <Date className="m-card-description__date">
                    {cardData.date}
                  </Date>
                  <Date className="m-card-description__month">
                    {cardData.month}
                  </Date>
                </div>
                <div className="m-card-description__link">
                  <LinkCard href={cardData.href} modifiers={modifiers}>
                    {cardData.link}
                  </LinkCard>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
