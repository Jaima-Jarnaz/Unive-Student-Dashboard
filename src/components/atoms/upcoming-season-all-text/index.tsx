import classNames from "classnames";
export interface UpcomingSeasonAllTextProps {
  children?: React.ReactNode;
  className?: string;
}

export const UpcomingSeasonAllText: React.FC<UpcomingSeasonAllTextProps> = ({
  children,
  className,
}) => (
  <p className={classNames("a-upcoming-season-all-text", className)}>
    {children}
  </p>
);
