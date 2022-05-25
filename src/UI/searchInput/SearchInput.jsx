import Search from "../../Icons/Search";
import "./searchInput.scss";

function SearchInput({className}) {
  return (
    <div className={`search-input-ui ${className}`}>
      <span className="search-input-icon">
        <Search width="17" height="17" />
      </span>
      <input
        id="before"
        type="search"
        placeholder="Search"
        className="searchInput"
        autoComplete="on"
      />
    </div>
  );
}

export default SearchInput;
