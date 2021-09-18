import classNames from "classnames";

export interface ProfileDesignationProps {
  children?: React.ReactNode;
  className?: string;
}

export const ProfileDesignation: React.FC<ProfileDesignationProps> = ({
  children,
  className,
}) => (
  <p className={classNames("a-profile-designation", className)}>{children}</p>
);
