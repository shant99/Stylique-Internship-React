import "./allProducts.scss";
import Button from "../../UI/Button";
import FolderPlus from "../../Icons/FolderPlus";
import StyliqueLogo from "../../Icons/StyliqueLogo";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setCardDetails } from "../../redux/slice/reducerOne";
import { useState } from "react";
import { CARD_DETAILS } from "../../config/actions";
import CircularProgress from "@mui/material/CircularProgress";

function AllProducts() {
  let { products, tagname } = useSelector((state) => state.reducerOne);
  let [productsFilter, setProductsFilter] = useState({
    tagname: [],
    filterProducts: true,
  });
  const dispatch = useDispatch();
  let url = useLocation();
  let navigate = useNavigate();

  const cardHandler = (e, item) => {
    dispatch(setCardDetails({ cardDetails: item }));
    navigate("card/" + item.productname.split(" ").join(""));
    localStorage.setItem(CARD_DETAILS, JSON.stringify(item));
  };

  const tagsnameButtonHandler = (e, item) => {
    e.target.classList.toggle("tagsnameActive");
    setProductsFilter((prev) => {
      const is_tagsnameActive = e.target.className
        .split(" ")
        .includes("tagsnameActive");
      const tagnameArr = prev.tagname;
      const newTagnameArr = !is_tagsnameActive
        ? tagnameArr.filter((i) => i !== item.tagname).sort()
        : [...tagnameArr, item.tagname];
      return {
        tagname: newTagnameArr,
        filterProducts: newTagnameArr.length ? false : true,
      };
    });
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
            <div className="allproducts-tagsname-column">
              {tagname.map((item, index) => (
                <Button
                  key={index}
                  name={item.tagname}
                  className="allproducts-tagsname-button"
                  onClick={(e) => tagsnameButtonHandler(e, item)}
                />
              ))}
            </div>
            <div className="allproducts-cards-column">
              {products.length ? (
                [
                  // let one = [ 'c'  , 'a'];
                  // let two = [{tags: ['a' , 'b']} , {tags:['b']} , {tags: ['c']} , {tags:[ 'a']}]
                
                
                  // let arr = two.filter((item) => {
                  //   let a = one.map(i => {
                  //     let s = item.tags.some(e => i === e)
                  //     if(s) return s
                  //   })
                  //   if(a.every(e => e === true)) return item
                  // })
                  productsFilter.filterProducts
                    ? products
                    : products.filter((item) => {
                        let arr = productsFilter.tagname.map(i => {
                           let s = item.tags.split(', ').some(e => i === e)
                           if(s) return s
                        })
                        if(arr.every(e => e === true)) return item
                      }),
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
                        <img src={item.img_url} alt="a" className="card-img" />
                        <p className="card-productname">{item.productname}</p>

                        <div className="card-button-div">
                          {item.tags
                            .split(", ")
                            .sort()
                            .map((tag, ind) => (
                              <button className="card-button" key={ind}>
                                {tag}
                              </button>
                            ))}
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
                  })
              ) : (
                <div className="progress">
                  <CircularProgress />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
