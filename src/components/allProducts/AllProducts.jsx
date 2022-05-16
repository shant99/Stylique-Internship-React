import "./allProducts.scss";
import { useState, useEffect } from "react";
import Card from "./card/Card";
import Button from "../../UI/Button";
import FolderPlus from "../../Icons/FolderPlus";
import StyliqueLogo from "../../Icons/StyliqueLogo";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { setCardDetails } from "../../redux/slice/reducerOne";

function AllProducts() {
  let { products ,tagname } = useSelector((state) => state.reducerOne);
  const dispatch = useDispatch();
  let url = useLocation()

  const cardHandler = (e, item) => {
    dispatch(setCardDetails({cardDetails: item})) 
  };


  return (
    <>
        <div className="allproducts">
          <div className="allproducts-header-container">
            <div className="allproducts-header-column">
              <span className="allproducts-header-logo">
                <StyliqueLogo />
              </span>
              <div>
                <p className="allproducts-header-item">ALL Products</p>
                <p className="allproducts-header-line"></p>
              </div>
            </div>
          </div>

          <div className="allproducts-main">
            <div className="allproducts-container">
              <div className="allproducts-menu-column">
                <Button name="Ambient" className="allproducts-menu-button" />
                <Button name="Red" className="allproducts-menu-button" />
                <Button name="Classic" className="allproducts-menu-button" />
                <Button name="Modern" className="allproducts-menu-button" />
                <Button name="New Houses" className="allproducts-menu-button" />
                <Button name="Minimal" className="allproducts-menu-button" />
                <Button name="Yellow" className="allproducts-menu-button" />
                <Button name="Fi" className="allproducts-menu-button" />
              </div>
              <div className="allproducts-cards-column">
                {products.map((item, index) => {
                  return (
                    <div
                    to={`${url.pathname}/card`}
                      className="card"
                      key={index}
                      onClick={(e) =>cardHandler(e, item) }
                    >
                      <span className="folderplus">
                        <FolderPlus />
                      </span>
                      <NavLink to={url.pathname + 'card'}><img src={item.img_url} alt="a" className="card-img" /></NavLink>
                      <p className="card-productname">{item.productname}</p>

                      <div className="card-button-div">
                        {tagname.map((itm, ind) => {
                          return (
                            <button key={ind} className="card-button">
                              {itm["tagname"]}
                            </button>
                          );
                        })}
                      </div>
                      <p className="card-description">
                        {item.description.length < 70
                          ? item.description
                          : item.description.slice(0, 70).concat("...")}
                      </p>
                      <p className="card-price">
                        Ab {item.price} € / {item.selling_unit}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default AllProducts;
