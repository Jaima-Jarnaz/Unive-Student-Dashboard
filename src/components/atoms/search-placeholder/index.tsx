import classNames from "classnames";

export interface SearchPlaceholderProps {
  children?: React.ReactNode;
  className?: string;
}

export const SearchPlaceholder: React.FC<SearchPlaceholderProps> = ({
  children,
  className,
}) => (
  <p className={classNames("a-search-placeholder", className)}>{children}</p>
);
