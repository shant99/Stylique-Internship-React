/* eslint-disable jsx-a11y/anchor-is-valid */
import Clock from "../../../../Icons/Clock";
import InfoCircle from "../../../../Icons/InfoCircle";
import Truck from "../../../../Icons/Truck";
import "./tabsContainer.scss";
import { v4 as uuidv4 } from "uuid";

const tabs = [
  "Beschreibung",
  "Produktinformation",
  "Bestellinformationen",
  "Versandinformationen",
  "Experten",
  "Downloads",
];

const TabPanel1 = () => {
  const tabPanel = {
    title: "WANDBEKLEIDUNG & WANDKUNST",
    content:
      "Alles andere als gewöhnliche Tapeten lässt der italienische Hersteller LondonArt von seinen Designern, Künstlern, Architekten, Illustratoren, Tattoo-Künstlern und Stylisten entwerfen. Einzigartige Designs perfekt abgestimmt auf einen robusten Untergrund mit toller Haptik. Tapeten, die zum ersten mal auch in Feuchträumen zum Einsatz kommen können. Die Marke steht für einzigartige, dem Zeitgeist entsprechende Designs und Funktionalität.F",
    tags: [
      "Wandfarbe",
      "Pastellrot",
      "Rot",
      "Leuchtende Farben",
      "Koralle",
      "Pastellfarben",
    ],
  };
  return (
    <div className="tab-panel-1">
      <p className="tab-panel-1-title">{tabPanel.title}</p>
      <p className="tab-panel-1-content">{tabPanel.content}</p>
      <p className="tab-panel-1-tags">
        {tabPanel.tags.map((item, index) => {
          return (
            <>
              <span key={index} className="tab-panel-1-tag">
                {item}
              </span>
            </>
          );
        })}
      </p>
    </div>
  );
};

const TabPanel2 = () => {
  const tabPanel = {
    productInfoCol1: {
      Eignung: "Decke, Wand",
      "Breite in cm": "20",
      Optik: "Zementoptik",
      Motiv: "Modern   ",
      Oberfläche: "Matt",
      "Stärke in cm": "1.60",
    },
    productInfoCol2: {
      Material: "Acrylat",
      "Länge in cm": "20",
      "Gewicht in kg (≈)": "7.35",
      Rutschhemmung: "R9",
      Kantenausführung: "Nicht Rektifiziert",
      Frostbeständigkeit: "Beständig",
    },
  };
  let productInfoCol1 = Object.entries(tabPanel.productInfoCol1);
  let productInfoCol2 = Object.entries(tabPanel.productInfoCol2);

  return (
    <>
      <div className="tab-panel-2">
        <ul className="tab-panel-product-info-col1">
          {productInfoCol1.map((item) => {
            return (
              <li key={uuidv4()}>
                <span>{item[0]}</span>
                <span>{item[1]}</span>
              </li>
            );
          })}
        </ul>
        <ul className="tab-panel-product-info-col2">
          {productInfoCol2.map((item) => {
            return (
              <li key={uuidv4()}>
                <span>{item[0]}</span>
                <span>{item[1]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const TabPanel3 = () => {
  const tabPanel = {
    Mindestbestellmenge: "1 Stück",
    Paketinhalt: "16 Stück",
    Artikelnummer: "145M34M01",
    Herstellername: "STYLIQUE",
  };
  const arr = Object.entries(tabPanel);
  return (
    <div className="tab-panel-3">
      <ul>
        {arr.map((item) => {
          return (
            <li key={uuidv4()}>
              <span>{item[0]}</span>
              <span>{item[1]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const TabPanel4 = () => {
  return (
    <div className="tab-panel-4">
      <div className="tab-panel-4-rows">
        <div className="tab-panel-4-row">
          <span>
            <Clock />
          </span>
          <p>
            Den genauen Lieferzeitraum können wir dir nach Bestelleingang
            nennen. Falls du vor deiner Bestellung eine genauere Lieferfrist
            erfahren möchtest, kontaktiere unser Team unter service@stylique.de.
          </p>
        </div>
        <div className="tab-panel-4-row">
          <span>
            <Truck />
          </span>
          <p>
            Dieses Produkt wird von einer Spedition geliefert, damit es sicher
            bei dir ankommt. Der Händler wird sich für die Absprache eines
            Liefertermins mit dir in Verbindung setzen.
          </p>
        </div>
        <div className="tab-panel-4-row">
          <span>
            <InfoCircle />
          </span>
          <p>
            Die Darstellung von Farben kann von Bildschirm zu Bildschirm
            abweichen. Bitte nutze unseren Musterbox-Service und bestelle vorab
            Muster zu den Produkten.
          </p>
        </div>
      </div>
    </div>
  );
};

function TabsContainer() {
  const tabClickHandler = (e, index) => {
    //   e.target.classList.toggle('tab-active')
  };
  return (
    <>
      <div className="tabs-container">
        <div className="tabs">
          {tabs.map((item, index) => {
            return (
              <p key={index} className="tab">
                <button
                  onClick={(e) => tabClickHandler(e, index)}
                  className="tab-button"
                >
                  {item}
                </button>
              </p>
            );
          })}
        </div>
        <div className="tab-panel">
          <TabPanel4 />
        </div>
      </div>
    </>
  );
}

export default TabsContainer;
