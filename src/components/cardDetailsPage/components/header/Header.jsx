/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Heart from "../../../../Icons/Heart";
import Shopping from "../../../../Icons/Shopping";
import StyliqueLogo from "../../../../Icons/StyliqueLogo";
import User from "../../../../Icons/User";
import SearchInput from "../../../../UI/searchInput/SearchInput";
import "./header.scss";

function Header() {
  let [value, setValue] = useState();

  const selectHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="header-container">
        <div className="header">
          <div className="row-1">
            <StyliqueLogo />
            <SearchInput />
            <div className="row-1-icons">
              <Heart width="23" height="20" cursor="pointer" />
              <User width="20" height="22" cursor="pointer" />
              <Shopping width="20" height="22" cursor="pointer" />
            </div>
          </div>
          <div className="row-2">
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
            <select
              name="dropdown-select"
              className="dropdown-select"
              onChange={(e) => selectHandler(e)}
              value={value}
            >
              <option
                className="dropdown-option"
                value="Hersteller"
                defaultValue
              >
                Hersteller
              </option>
              <option className="dropdown-option" value="Vendors">
                Vendors
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
