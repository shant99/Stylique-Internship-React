import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CARD_DETAILS } from "../../../config/actions";
import "./card.scss";

function Card() {
  let {cardDetails} = useSelector(state => state.reducerOne)
  let cardDetails_LS = JSON.parse(localStorage.getItem(CARD_DETAILS))

  
  return (
    <div className="card-details">
      <div className="card-details-container">
        <p>
          <span className="card-details-span">Produt name -</span>{" "}
          {cardDetails_LS.productname}
        </p>
        <p>
          <span className="card-details-span">Product price -</span>{" "}
          {cardDetails_LS.price}€
        </p>
        <p>
          <span className="card-details-span">Product tags - </span>
          {cardDetails_LS.tags}
        </p>
        <p>
          <span className="card-details-span">Product description -</span>{" "}
          {cardDetails_LS.description}
        </p>
        <div className="products-images-gallery">
          <p>
            <span className="card-details-span">Products images gallery</span>
          </p>
          <img
            src={cardDetails_LS.img_url}
            alt="a"
            className="products-images-gallery-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
