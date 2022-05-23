/* eslint-disable no-dupe-keys */
import "./carousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ arr = [], className, imgClickHandler }) {
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
    pauseOnHover: true,
    swipeToSlide: true,
  };
  return (
    <Slider {...settings} className="carousel">
      {arr.map((item, index) => {
        return (
                <img
                  onClick={(e) => imgClickHandler(e, index)}
                  className={className}
                  src={item.imageUrl}
                  alt="productImage"
                  key={index}
                />
        );
      })}
    </Slider>
  );
}

export default Carousel;
