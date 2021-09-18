export interface ExternalLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  children: React.ReactNode;
  href: string;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ children, href, ...props }) => (
  <a className="a-external-link" href={href} rel="noreferrer" target="_blank" {...props}>
    {children}
  </a>
);
