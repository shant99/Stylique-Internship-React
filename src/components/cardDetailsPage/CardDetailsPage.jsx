import "./CardDetailsPage.scss";
import AboveHeader from "./components/aboveHeader/AboveHeader";
import CardDetals from "./components/cardDetails/CardDetails";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TabsContainer from "./components/tabsContainer/TabsContainer";
import Visas from "./components/visa/Visas";

function Card() {
  return (
    <div className="card-details-page">
      <AboveHeader />
      <Header />
      <div className="card-details-page-body-container">
        <div className="card-details-page-body">
          <div className="pag">Home / Produkte / Fliesen / Zementfliesen</div>
          <CardDetals />
          <TabsContainer />
          <Visas />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Card;
