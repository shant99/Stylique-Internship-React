// import ManufacterIcon from '../../../../Icons/ManufacterIcon'
import { useSelector } from 'react-redux';
import './manufacterInfo.scss' 

function ManufacterInfo(){
    let { manufacturerName , productName } = useSelector((state) => state.cardDetailsPage_Slice);
    return (
        <div className='manufacter-info-container'>
            <div className='manufacter-info-head'>
                <p className='logo'></p>
                <p className='manufacter-name'>
                <span>{manufacturerName}</span>
                <span>Hersteller</span>
                </p>
            </div>
            <div className="manufacter-info-productName">{productName}</div>
        </div>
    )
}

export default ManufacterInfo