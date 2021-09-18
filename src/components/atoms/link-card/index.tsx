export interface ExternalLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  children: React.ReactNode;
  href: string;
}

export const LinkCard: React.FC<ExternalLinkProps> = ({
  children,
  href,
  ...props
}) => (
  <a
    className="a-cardlink"
    href={href}
    rel="noreferrer"
    target="_blank"
    {...props}
  >
    {children}
  </a>
);
