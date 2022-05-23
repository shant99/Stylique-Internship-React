/* eslint-disable jsx-a11y/anchor-is-valid */
import Maestro from "../../../../Icons/Maestro";
import MasterCard from "../../../../Icons/MasterCard";
import Visa from "../../../../Icons/Visa";
import "./footer.scss";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
            {/* 1 */}
          <ul>
            <h4>Was suchst du?</h4>
            <br />
            <li>
              <a href="#">Produkte</a>
            </li>
            <li>
              <a href="#">Inspiration</a>
            </li>
            <li>
              <a href="#">Magazin</a>
            </li>
            <br />
            <li>
              <a href="#">Hersteller</a>
            </li>
            <li>
              <a href="#">Architekten</a>
            </li>
            <li>
              <a href="#">Händler</a>
            </li>
          </ul>
          {/* 2 */}
          <ul>
            <h4>Unternehmen</h4>
            <br />
            <li>
              <a href="#">Unsere Mission</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <br />
            <li>
              <a href="#">Für Architekten</a>
            </li>
            <li>
              <a href="#">Für Hersteller</a>
            </li>
            <li>
              <a href="#">Für Händler</a>
            </li>
          </ul>
          {/* 3 */}
          <ul>
            <h4>Sicher einkaufen</h4>
            <br />
            <br />
            <li>
              <a href="#">Lieferung & Versand</a>
            </li>
            <li>
              <a href="#">Bezahlmethoden</a>
            </li>
            <br />
            <li>
              <span><Visa width='67' heigth='21'/></span>
              <span><Maestro width='66' heigth='38'/></span>
              <span><MasterCard width='60' heigth='40' /></span>
            </li>
            <br />
            <li>
              <a href="#">AGB's</a>
            </li>
            <li>
              <a href="#">Datenschutz</a>
            </li>
            <li>
              <a href="#">Impressum</a>
            </li>
          </ul>
          {/* 4 */}
          <ul>
            <h4>Kundenservice</h4>
            <br />
            <li>
              <a href="#">Du hast Fragen zu Produkten oder zu </a>
            </li>
            <li>
              <a href="#">Deiner Bestellung?</a>
            </li>
            <br />
            <li>
              <a href="#">E-Mail: team@stylique.de</a>
            </li>
            <br />
            <li>
              <a href="#">Telefon: +49  211  936 7 50 50</a>
            </li>
            <li>
              <a href="#">Mo-Sa von 9:00 – 20:00</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
