import classNames from "classnames";
import { Text } from "components/atoms/text-research";
import clock from "assets/image/clock.png";

export interface StatusProps {
  text: string;
  className?: string;
}

export const Status: React.FC<StatusProps> = ({ text, className }) => (
  <div className={classNames("a-status", className)}>
    <div className="a-status__content-img">
      <img src={clock} alt="progress" />
    </div>
    <Text className="a-status__text">{text}</Text>
  </div>
);
