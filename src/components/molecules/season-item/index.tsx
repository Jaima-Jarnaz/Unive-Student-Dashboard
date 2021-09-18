import { Text } from "components/atoms/text";
import { SubText } from "components/atoms/sub-text";
import { TimeLabel } from "components/atoms/time-label";

export interface SeasonItemProps {
  text: string;
  sub_text: string;
  time_label: string;
}

export const SeasonItem: React.FC<SeasonItemProps> = ({
  text,
  sub_text,
  time_label,
}) => {
  return (
    <div className="m-season-item">
      <div className="m-season-item__text">
        <Text>{text}</Text>
        <SubText>{sub_text}</SubText>
      </div>

      <div className="m-season-item__time">
        <TimeLabel>{time_label}</TimeLabel>
      </div>
    </div>
  );
};
