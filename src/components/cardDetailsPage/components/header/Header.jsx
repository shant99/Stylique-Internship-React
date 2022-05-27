/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Heart from "../../../../Icons/Heart";
import MenuClose from "../../../../Icons/MenuClose";
import MenuOpen from "../../../../Icons/MenuOpen";
import Search from "../../../../Icons/Search";
import Shopping from "../../../../Icons/Shopping";
import StyliqueLogo from "../../../../Icons/StyliqueLogo";
import User from "../../../../Icons/User";
import SearchInput from "../../../../UI/searchInput/SearchInput";
import "./header.scss";

const HeaderMenuItems = ({ value, selectHandler }) => {
  return (
    <>
      <div className="tabs">
        <a href="#" className="tab">
          Neu
        </a>
        <a href="#" className="tab">
          Shop by Style
        </a>
        <a href="#" className="tab">
          Fliesen
        </a>
        <a href="#" className="tab">
          Tapeten
        </a>
        <a href="#" className="tab">
          Farber
        </a>
        <a href="#" className="tab">
          Teppiche
        </a>
        <a href="#" className="tab">
          Elektro
        </a>
        <a href="#" className="tab">
          Turbeschlage
        </a>
        <a href="#" className="tab">
          Dielen & Parkett
        </a>
        <a href="#" className="tab">
          Oberflachen
        </a>
        <a href="#" className="tab">
          Muster
        </a>
      </div>
      <div className="select-wrapper">

      <select
        name="dropdown-select"
        className="dropdown-select"
        onChange={(e) => selectHandler(e)}
        value={value}
      >
        <option className="dropdown-option" value="Hersteller" defaultValue>
          Hersteller
        </option>
        <option className="dropdown-option" value="Vendors">
          Vendors
        </option>
      </select>
      </div>
    </>
  );
};

function Header() {
  let [value, setValue] = useState();
  let [menuOpen, setMenuOpen] = useState(false);

  const selectHandler = (e) => {
    setValue(e.target.value);
  };

  const menuOpenClickHandler = (e) => {
    setMenuOpen((prev) => !prev);
  };
  const menuCloseClickHandler = () => {
    setMenuOpen((prev) => !prev);
  };
  console.log(menuOpen);
  return (
    <>
      <div className="header-container">
        <div className="header">
          <div className="row-1">
            <StyliqueLogo className="row-1-stylique-logo" />
            <SearchInput className="row-1-search-input" />
            <div className="row-1-icons">
              <Search
                width="17px"
                height="17px"
                cursor="pointer"
                className="row-1-icons-search-icon"
              />
              <Heart
                className="row-1-icons-heart-icon"
                width="23"
                height="20"
                cursor="pointer"
              />
              <User
                className="row-1-icons-user-icon"
                width="20"
                height="22"
                cursor="pointer"
              />
              <Shopping
                className="row-1-icons-shopping-icon"
                width="20"
                height="22"
                cursor="pointer"
              />
              <MenuOpen
                className="row-1-icons-menu-open"
                onClick={menuOpenClickHandler}
              />
            </div>
          </div>
          
          <div className={menuOpen ? "row-2 row-2-block-active" : "row-2"}>
            <MenuClose
              onClick={menuCloseClickHandler}
              className="row-2-active-menu-close"
            />
            <HeaderMenuItems value={value} selectHandler={selectHandler} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
