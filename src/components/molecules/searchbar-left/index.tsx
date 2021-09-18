import { SearchIcon } from "components/atoms/search-icon";
import { SearchPlaceholder } from "components/atoms/search-placeholder";

export interface SearchBarLeftProps {
  search_placeholder: string;
}

export const SearchBarLeft: React.FC<SearchBarLeftProps> = ({
  search_placeholder,
}) => {
  return (
    <div className="m-searchbar-left">
      <SearchIcon></SearchIcon>
      <SearchPlaceholder>{search_placeholder}</SearchPlaceholder>
    </div>
  );
};
