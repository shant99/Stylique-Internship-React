import { useSelector } from "react-redux";
import Love from "../../../../Icons/Heart";
import "./priceBox.scss";

function PriceBox() {
  let { price, sampleboxprice } = useSelector(
    (state) => state.cardDetailsPage_Slice
  );
  return (
    <div className="price-box">
      <p className="price-box-row-1">
        <span className="price-1">{price} € */ Matte</span>
        <span className="price-2">{price}€*</span>
      </p>
      <p className="price-box-row-2">
        <button className="warenkorb">In den Warenkorb</button>
        <button className="like">
          <Love width="23" height="20" />
        </button>
      </p>
      <p className="price-box-row-3">
        <button className="bestellen">Musten bestellen</button>
      </p>
      <p className="price-box-row-4">
        <button className="price-box-row-4-button">
          Mehr Infos zum Muster
        </button>
        <span className="sampleboxprice">{sampleboxprice} €*</span>
      </p>
    </div>
  );
}

export default PriceBox;
