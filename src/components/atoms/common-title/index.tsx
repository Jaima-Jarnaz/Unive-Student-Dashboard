import dash from "../../../assets/images/dash.png";

export interface CommonTitleProps {
  children: React.ReactNode;
}

export const CommonTitle: React.FC<CommonTitleProps> = ({ children }) => (
  <div>
    <img className="a-dash" src={dash} alt="dash images" />
    <h1 className="a-common-title">{children}</h1>
  </div>
);
