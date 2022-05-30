/* eslint-disable no-dupe-keys */
import "./carousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({
  arr = [],
  className,
  imgClickHandler,
  slidesToShow = 3,
  dots = true,
  slidesToScroll = 1,
  responsive,
}) {
  const { breakpoint1 } = responsive;
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    dots: dots,
    fade: false,
    touchMove: true,
    useCSS: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: breakpoint1.breakpoint,
        settings: {
          slidesToShow: breakpoint1.slidesToShow,
          slidesToScroll: breakpoint1.slidesToScroll,
          infinite: true,
          dots: true,
        },
      },
      // {
      //   breakpoint: breakpoint1,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
      // {
      //   breakpoint: breakpoint1,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
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
