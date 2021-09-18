import classNames from "classnames";
export interface UpcomingSeasonTitleProps {
  children?: React.ReactNode;
  className?: string;
}

export const UpcomingSeasonTitle: React.FC<UpcomingSeasonTitleProps> = ({
  children,
  className,
}) => (
  <p className={classNames("a-upcoming-season-title", className)}>{children}</p>
);
