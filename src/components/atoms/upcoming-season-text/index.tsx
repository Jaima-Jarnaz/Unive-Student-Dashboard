import classNames from "classnames";
export interface UpcomingSeasonTextProps {
  children?: React.ReactNode;
  className?: string;
}

export const UpcomingSeasonText: React.FC<UpcomingSeasonTextProps> = ({
  children,
  className,
}) => (
  <p className={classNames("a-upcoming-season-text", className)}>{children}</p>
);
