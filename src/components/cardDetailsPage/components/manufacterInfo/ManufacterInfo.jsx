// import ManufacterIcon from '../../../../Icons/ManufacterIcon'
import { useState } from "react";
import { useSelector } from "react-redux";
import "./manufacterInfo.scss";
import { v4 } from "uuid";

function ManufacterInfo() {
  let { manufacturerName, productName, attributes } = useSelector(
    (state) => state.cardDetailsPage_Slice
  );
  let [buttonIndex, setButtonIndex] = useState(0);

  const attributes1ButtonHandler = (e, value, index) => {
    setButtonIndex(index);
  };

  return (
    <div className="manufacter-info-container">
      <div className="manufacter-info-head">
        <p className="logo"></p>
        <p className="manufacter-name">
          <span className="span-1">{manufacturerName}</span>
          <span className="span-2">Hersteller</span>
        </p>
      </div>
      <div className="manufacter-info-productName">{productName}</div>
      <div className="manufacter-info-atributes1">
        <p className="manufacter-info-atribute-name">
          {attributes.length ? attributes[0].attributeName : ""}
          <span className="value-name">
            {" "}
            -{" "}
            {attributes.length
              ? attributes[0].attributeValues[buttonIndex].valueName
              : ""}
          </span>
        </p>
        <div className="manufacter-info-atributes1-attributes-wrapper">
          {attributes.length
            ? attributes[0].attributeValues.map((item, index) => {
                return (
                  <p
                    className={
                      buttonIndex === index
                        ? "atributes1-button-wrapper atributes1-button-wrapper-active"
                        : "atributes1-button-wrapper"
                    }
                    key={v4()}
                  >
                    <button
                      key={v4()}
                      style={{ backgroundColor: `${item.code}` }}
                      className="atributes1-button "
                      onClick={(e) =>
                        attributes1ButtonHandler(e, item.valueName, index)
                      }
                    ></button>
                  </p>
                );
              })
            : ""}
        </div>
      </div>
      <div className="manufacter-info-atributes3">
        <p className="manufacter-info-atribute-name">
          {attributes.length ? attributes[2].attributeName : ""}
        </p>
        <div className="manufacter-info-atributes3-attributes-wrapper">
          {attributes.length
            ? attributes[2].attributeValues.map((item) => {
                return (
                  <button key={v4()} className="atributes3-button">
                    {item.valueName}
                  </button>
                );
              })
            : ""}
        </div>
      </div>
      <div className="manufacter-info-atributes2">
        <p className="manufacter-info-atribute-name">
          {attributes.length ? attributes[1].attributeName : ""}
        </p>
        <div className="manufacter-info-atributes2-attributes-wrapper">
          {attributes.length
            ? attributes[1].attributeValues.map((item) => {
                return (
                  <button key={v4()} className="atributes2-button">
                    {item.valueName}
                  </button>
                );
              })
            : ""}
        </div>
      </div>
      <div className="manufacter-info-atributes2">
        <p className="manufacter-info-atribute-name">
          {attributes.length ? "Bestellmenge" : ""}
        </p>
        <div className="manufacter-info-atributes2-attributes-wrapper">
          {attributes.length
            ? attributes[1].attributeValues.map((item) => {
                return (
                  <button key={v4()} className="atributes2-button">
                    {item.valueName}
                  </button>
                );
              })
            : ""}
        </div>
      </div>
      <div className="manufacter-info-atributes2">
        <p className="manufacter-info-atribute-name">
          {attributes.length ? "Munfeler" : ""}
        </p>
        <div className="manufacter-info-atributes2-attributes-wrapper">
          {attributes.length
            ? attributes[1].attributeValues.map((item) => {
                return (
                  <button key={v4()} className="atributes2-button">
                    {item.valueName}
                  </button>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default ManufacterInfo;
