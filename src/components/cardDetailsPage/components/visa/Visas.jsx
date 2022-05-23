import Diamond from '../../../../Icons/Diamond';
import Maestro from '../../../../Icons/Maestro';
import MasterCard from '../../../../Icons/MasterCard';
import Payment from '../../../../Icons/Payment';
import Visa from '../../../../Icons/Visa';
import './visa.scss';
 function Visas(){
     return (
         <>
            <div className='visas'>
                <div className='visa-row-1'>
                    <p className='visa-row-1-txt'><Diamond /><span>Zertifizierte Produkte</span></p>
                    <p className='visa-row-1-txt'><Diamond /><span>Sichere Zahlmöglichkeiten</span></p>
                    <p className='visa-row-1-txt'><Diamond /><span>Produkte aus verschiedenen Kategorien</span></p>
                    <p className='visa-row-1-txt'><Diamond /><span>Kuratierte Produkte</span></p>
                </div>
                <div className="visa-row-2">
                    <p className="visa-row-2-txt"><Payment /></p>
                    <p className="visa-row-2-txt"><Visa /></p>
                    <p className="visa-row-2-txt"><Maestro /></p>
                    <p className="visa-row-2-txt"><MasterCard /></p>
                </div>
            </div>
         </>
     )
 }

 export default Visas