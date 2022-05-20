import Heart from '../../../../Icons/Heart'
import Shopping from '../../../../Icons/Shopping'
import StyliqueLogo from '../../../../Icons/StyliqueLogo'
import User from '../../../../Icons/User'
import SearchInput from '../../../../UI/searchInput/SearchInput'
import './header.scss'

function Header(){
    return (
        <>
            <div className='header-container'>
                <div className='header'>
                    <div className='row-1'>
                        <StyliqueLogo />
                        <SearchInput />
                        <div><Heart /> <User /> <Shopping /></div>
                    </div>
                    <div className='row-2'>
                        <div className="tabs">
                            <span className='tab'>Neu</span>
                            <span className='tab'>Shop by Style</span>
                            <span className='tab'>Fliesen</span>
                            <span className='tab'>Tapeten</span>
                            <span className='tab'>Farber</span>
                            <span className='tab'>Teppiche</span>
                            <span className='tab'>Elektro</span>
                            <span className='tab'>Turbeschlage</span>
                            <span className='tab'>Dielen & Parkett</span>
                            <span className='tab'>Oberflachen</span>
                            <span className='tab'>Muster</span>
                        </div>
                        <span className='dropdown-triggle'> Partners</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header