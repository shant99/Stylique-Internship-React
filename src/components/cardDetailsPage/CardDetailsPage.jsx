import "./CardDetailsPage.scss";
import AboveHeader from "./components/aboveHeader/AboveHeader";
import BreadCrumps from "./components/breadcrumbs/Breadcrumbs";
import CardDetals from "./components/cardDetails/CardDetails";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TabsContainer from "./components/tabsContainer/TabsContainer";
import PaymentBox from "./components/visa/PaymentBox";

function Card() {
  return (
    <div className="card-details-page">
      <AboveHeader />
      <Header />
      <div className="card-details-page-body-container">
        <div className="card-details-page-body">
          <BreadCrumps className="pag" />
          <CardDetals />
          <TabsContainer />
          <PaymentBox />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Card;
