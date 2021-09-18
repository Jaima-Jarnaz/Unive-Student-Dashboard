import classNames from "classnames";

export interface ProfileNameProps {
  children?: React.ReactNode;
  className?: string;
}

export const ProfileName: React.FC<ProfileNameProps> = ({
  children,
  className,
}) => <p className={classNames("a-profile-name", className)}>{children}</p>;
