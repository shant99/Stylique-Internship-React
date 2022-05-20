import Search from "../../Icons/Search";
import "./searchInput.scss";

function SearchInput() {
  return (
    <div>
      <form>
        {/* <label htmlFor="search" id="before">
          <Search />
        </label> */}
        <input id="before" type="search" placeholder="Search" className="searchInput" />
      </form>
    </div>
  );
}

export default SearchInput;
