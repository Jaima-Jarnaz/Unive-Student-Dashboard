import classNames from "classnames";

export interface NavbarTextProps {
  children?: React.ReactNode;
  className?: string;
}

export const NavbarText: React.FC<NavbarTextProps> = ({
  children,
  className,
}) => <p className={classNames("a-navbar-text", className)}>{children}</p>;
