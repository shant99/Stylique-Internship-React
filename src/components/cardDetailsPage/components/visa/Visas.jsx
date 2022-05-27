import Diamond from "../../../../Icons/Diamond";
import Maestro from "../../../../Icons/Maestro";
import MasterCard from "../../../../Icons/MasterCard";
import Payment from "../../../../Icons/Payment";
import Visa from "../../../../Icons/Visa";
import "./visa.scss";
function Visas() {
  return (
    <>
      <div className="payment-box">
        <ul className="payment-box-row-1">
          <li className="payment-box-row-1-txt">
            <span>
              <Diamond />
            </span>
            <span>Zertifizierte Produkte</span>
          </li>
          <li className="payment-box-row-1-txt">
            <span>
              <Diamond />
            </span>
            <span>Sichere Zahlmöglichkeiten</span>
          </li>
          <li className="payment-box-row-1-txt">
            <span>
              <Diamond />
            </span>
            <span>Produkte aus verschiedenen Kategorien</span>
          </li>
          <li className="payment-box-row-1-txt">
            <span>
              <Diamond />
            </span>
            <span>Kuratierte Produkte</span>
          </li>
        </ul>
        <ul className="payment-box-row-2">
          <li className="payment-box-row-2-txt">
            <Payment className='payment-icon' />
          </li>
          <li className="payment-box-row-2-txt">
            <Visa className='payment-box-icon'/>
          </li>
          <li className="payment-box-row-2-txt">
            <Maestro className='maestro-icon' />
          </li>
          <li className="payment-box-row-2-txt">
            <MasterCard className='masetr-card-icon' />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Visas;
