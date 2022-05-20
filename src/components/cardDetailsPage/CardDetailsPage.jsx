import "./CardDetailsPage.scss";
import AboveHeader from "./components/aboveHeader/AboveHeader";
import CardDetals from "./components/cardDetails/CardDetails";
import Header from "./components/header/Header";
import OtherDetails from "./components/otherDetails/OtherDetails";
import Visa from "./components/visa/Visa";

function Card() {
  return (
    <div className="card-details-page">
      <AboveHeader />
      <Header />
      <div className="card-details-page-body-container">
        <div className="card-details-page-body">
          <div className="pag">Home / Produkte / Fliesen / Zementfliesen</div>
          <CardDetals />
          <OtherDetails />
          <Visa />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Card;
