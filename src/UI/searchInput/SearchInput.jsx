import Search from "../../Icons/Search";
import "./searchInput.scss";

function SearchInput() {
  return (
    <div className="search-input-ui">
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
