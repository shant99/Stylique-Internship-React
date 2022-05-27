/* eslint-disable no-dupe-keys */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFunction } from "../../../../redux/slice/cardDetailsPage_Slice";
import Carousel from "../../../../UI/carousel/Carousel";
import ManufacterInfo from "../manufacterInfo/ManufacterInfo";
import PriceBox from "../priceBox/PriceBox";
import "./cardDetails.scss";

function CardDetals() {
  let { productImages } = useSelector((state) => state.cardDetailsPage_Slice);
  const dispatch = useDispatch();
  const [productImgZoom, setProductImgZoom] = useState(0);

  const imgClickHandler = (e, index) => setProductImgZoom(index);

  useEffect(() => {
    dispatch(asyncFunction());
  }, [dispatch]);
  return (
    <>
      <div className="product-details-container">
        <div className="product-images-wrapper">
          <div className="product-image-zoom">
            <img
              className="product-image-zoom-img"
              src={
                productImages[0] ? productImages[productImgZoom].imageUrl : null
              }
              alt="productImageZoom"
            />
          </div>
          <div className="main-carousel">
            <Carousel
              arr={productImages}
              className="product-image"
              imgClickHandler={imgClickHandler}
              slidesToShow = {3}
              slidesToScroll = {3}
              dots={false}
            />
          </div>
          <div className="main-carousel-response">
            <Carousel
              arr={productImages}
              className="product-image-response"
              imgClickHandler={imgClickHandler}
              slidesToShow={1}
              slidesToScroll ={1}
            />
          </div>
        </div>
        <div className="delivery-info">
          <div className="manufacter-info">
            <ManufacterInfo />
          </div>
          <div className="price-box-container">
            <PriceBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDetals;
