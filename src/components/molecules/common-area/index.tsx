import { CommonLogo } from "components/atoms/common-logo";
import { CommonText } from "components/atoms/common-text";
import { CommonTitle } from "components/atoms/common-title";

export interface CommonAreaProps {
  title: string;
  text: string;
}

export const CommonArea: React.FC<CommonAreaProps> = ({ title, text }) => {
  return (
    <div>
      <CommonTitle>{title}</CommonTitle>
      <CommonLogo></CommonLogo>
      <CommonText text={text}></CommonText>
    </div>
  );
};
