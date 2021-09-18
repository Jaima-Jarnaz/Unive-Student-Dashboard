import classNames from "classnames";
import { Text } from "components/atoms/text-research";
import { Heading3Text } from "components/atoms/heading-3";
export interface HeadingProps {
  children?: React.ReactNode;
  className?: string;
}

export const CardHeading: React.FC<HeadingProps> = ({ className }) => (
  <div className="a-card-heading">
    <Heading3Text className="a-card-heading__headingtext">
      UX Research - Week 3
    </Heading3Text>
    <Text className="a-card-heading__subtext">CERTIFICATE UX/UI design</Text>
  </div>
);
