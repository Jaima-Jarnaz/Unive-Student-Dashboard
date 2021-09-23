import classNames from "classnames";
import { mapModifiers } from "lib/utils";
export interface ExternalLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  children: React.ReactNode;
  modifiers?: "theme-green" | "theme-yellow" | "theme-purple";
  href: string;
}

export const LinkCard: React.FC<ExternalLinkProps> = ({
  children,
  modifiers,
  href,
  ...props
}) => (
  <a
    // className=mapModifiers{`a-cardlink a-cardlink${modifiers}`}
    className={classNames(mapModifiers("a-cardlink", modifiers), classNames)}
    href={href}
    rel="noreferrer"
    target="_blank"
    {...props}
  >
    {children}
  </a>
);
