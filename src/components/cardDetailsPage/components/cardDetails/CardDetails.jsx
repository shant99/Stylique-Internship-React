/* eslint-disable no-dupe-keys */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { asyncFunction } from "../../../../redux/slice/cardDetailsPage_Slice";
import "./cardDetails.scss";
import Search from "../../../../Icons/Search";
import Next from "../../../../Icons/Next";

function CardDetals() {
  let { productImages } = useSelector((state) => state.cardDetailsPage_Slice);
  const dispatch = useDispatch();
  const [productImgZoom , setProductImgZoom] =useState(0)
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    fade: false,
    touchMove: true,
    useCSS: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true ,
    swipeToSlide: true,
  };

  const imgClickHandler = (e ,index) => setProductImgZoom(index);

  useEffect(() => {
    dispatch(asyncFunction());
  }, [dispatch]);
  return (
    <>
      <div className="card-details-container">
        <div className="product-images-container">
          <div className="product-image-zoom">
            <img
              className="product-image-zoom-img"
              src={ productImages[0] ? productImages[productImgZoom].imageUrl: null}
              alt="ssdds"
            />
          </div>
          <div className="product-image-carousel">
            <Slider {...settings}>
              {productImages.map((item, index) => {
                return (
                  <div key={index} className="product-image-div">
                    <img
                      onClick={(e) => imgClickHandler(e , index)}
                      className="product-image"
                      src={item.imageUrl}
                      alt="productImage"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDetals;
