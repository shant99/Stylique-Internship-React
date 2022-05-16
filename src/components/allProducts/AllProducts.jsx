import "./allProducts.scss";
import Button from "../../UI/Button";
import FolderPlus from "../../Icons/FolderPlus";
import StyliqueLogo from "../../Icons/StyliqueLogo";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { setCardDetails } from "../../redux/slice/reducerOne";
import { useState } from "react";

function AllProducts() {
  let { products, tagname } = useSelector((state) => state.reducerOne);
  let [productsFilter, setProductsFilter] = useState({
    tagname: null,
    filterProducts: false,
  });
  const dispatch = useDispatch();
  let url = useLocation();
  let navigate = useNavigate();

  const cardHandler = (e, item) => {
    dispatch(setCardDetails({ cardDetails: item }));
    navigate("card/" + item.productname.split(" ").join(""));
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
              {tagname.map((item, index) => (
                <Button
                  name={item.tagname}
                  key={index}
                  className="allproducts-menu-button"
                  onClick={() => {
                    setProductsFilter((prev) => {
                      return {
                        tagname: item.tagname,
                        filterProducts:
                          item.tagname !== prev.tagname
                            ? true
                            : !prev.filterProducts,
                      };
                    });
                  }}
                />
              ))}
            </div>
            <div className="allproducts-cards-column">
              {[
                !productsFilter.filterProducts
                  ? products
                  : products.filter((i) => i.tags === productsFilter.tagname),
              ]
                .flat(1)
                .map((item, index) => {
                  return (
                    <div
                      to={`${url.pathname}/card`}
                      className="card"
                      key={index}
                      onClick={(e) => cardHandler(e, item)}
                    >
                      <span className="folderplus">
                        <FolderPlus />
                      </span>
                      {/* <NavLink
                      to={
                        url.pathname +
                        `card/` +
                        item.productname.split(" ").join("")
                      }
                    > */}
                      <img src={item.img_url} alt="a" className="card-img" />
                      {/* </NavLink> */}
                      <p className="card-productname">{item.productname}</p>

                      <div className="card-button-div">
                        <button className="card-button">{item.tags}</button> :
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
