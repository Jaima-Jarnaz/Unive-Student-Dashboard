import { Text } from "components/atoms/text-research";
import logo from "assets/image/logo.png";
export interface ExternalLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  children?: React.ReactNode;
  href: string;
  src: string;
}
type DataType = {
  data: ExternalLinkProps;
};

export const NavBrand: React.FC<DataType> = ({ data }) => (
  <a
    className="a-navlogo-link"
    href={data.href}
    rel="noreferrer"
    target="_blank"
    // {...props}
  >
    <div className="a-navlogo-link__content">
      <div>
        <img className="a-navlogo-link__image" src={data.src} alt="navbrand" />
      </div>
      <div className="a-navlogo-link__logotextcontent">
        <Text className="a-navlogo-link__logotext">{data.children}</Text>
      </div>
    </div>
  </a>
);

export const data: ExternalLinkProps = {
  src: logo,
  children: "Univé",
  href: "#",
};
