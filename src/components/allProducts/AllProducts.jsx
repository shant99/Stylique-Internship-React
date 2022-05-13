import "./allProducts.scss";
import { useState, useEffect } from "react";
import Card from "./card/Card";
import Button from "../../UI/Button";

function AllProducts() {
  const [productsArray, setProductsArray] = useState([]);
  const [tagname, setTagname] = useState([]);
  const [cardOpen, setCardOpen] = useState(false);
  const [cardDetails, setCardDetails] = useState({});

  const URL = "https://api.jsonbin.io/b/627b6d5525069545a3322906";
  const URL_TAGNAME = "https://api.jsonbin.io/b/627b6f3a019db467969aa57e";

  const cardHandler = (e, item) => {
    setCardDetails(item);
    setCardOpen((prev) => !prev);
  };

  useEffect(() => {
    fetch(URL)
      .then((data) => data.json())
      .then((res) => setProductsArray(res.products));
    fetch(URL_TAGNAME)
      .then((data) => data.json())
      .then((res) => setTagname(res));
  }, []);
  return (
    <>
      {cardOpen ? (
        <Card cardDetails={cardDetails} productsArray={productsArray} />
      ) : (
        <div className="allproducts">
          <div className="allproducts-header-container">
            <div className="allproducts-header-column">
              <p className="allproducts-header-logo">STYLIQUE</p>
              <div>
                <p className="allproducts-header-item">All products</p>
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
                {productsArray.map((item, index) => {
                  return (
                    <div
                      className="card"
                      key={index}
                      onClick={(e) => cardHandler(e, item)}
                    >
                      <img src={item.img_url} alt="a" className="card-img" />
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
                      <p className="card-description">{item.description.length < 70? item.description
                      : item.description.slice(0 , 70).concat('...')
                      }</p>
                      <p className="card-price">
                        {item.price} € / {item.selling_unit}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AllProducts;
