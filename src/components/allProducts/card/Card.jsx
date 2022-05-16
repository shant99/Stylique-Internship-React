import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./card.scss";

function Card() {
  let {cardDetails} = useSelector(state => state.reducerOne)

  let {name} = useParams();
  console.log(name)
  return (
    <div className="card-details">
      <div className="card-details-container">
        <p>
          <span className="card-details-span">Produt name -</span>{" "}
          {cardDetails.productname}
        </p>
        <p>
          <span className="card-details-span">Product price -</span>{" "}
          {cardDetails.price}€
        </p>
        <p>
          <span className="card-details-span">Product tags - </span>
          {cardDetails.tags}
        </p>
        <p>
          <span className="card-details-span">Product description -</span>{" "}
          {cardDetails.description}
        </p>
        <div className="products-images-gallery">
          <p>
            <span className="card-details-span">Products images gallery</span>
          </p>
          <img
            src={cardDetails.img_url}
            alt="a"
            className="products-images-gallery-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
