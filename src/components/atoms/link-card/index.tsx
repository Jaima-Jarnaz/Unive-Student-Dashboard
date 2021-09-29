import classNames from "classnames";
import { mapModifiers } from "lib/utils";
export interface ExternalLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  children: React.ReactNode;
  textColor?: string;
  href: string;
}

export const LinkCard: React.FC<ExternalLinkProps> = ({
  children,
  textColor,
  href,
  ...props
}) => (
  <a
    // className=mapModifiers{`a-cardlink a-cardlink${modifiers}`}
    className={classNames(mapModifiers("a-cardlink", textColor), classNames)}
    href={href}
    rel="noreferrer"
    target="_blank"
    {...props}
  >
    {children}
  </a>
);
