import './Header.css';

// Assets
import logo from '../../assets/LogoDark.svg';
import globe from '../../assets/globe.svg';
import menu from '../../assets/menu.svg';
import Avatar from '../../assets/Avatar.svg';

function Header(){
    return(
        <>
            <span id='container'>
            
                <span id='Logo'>
                    <img id='LogoDark' src={logo} alt="Airbnb Logo" />
                </span>

                <span id='Pages'>
                    <span className='TextDarkPrimary'>Places to stay</span>
                    <span className='TextDarkPrimary'>Experiences</span>
                    <span className='TextDarkPrimary'>Online Experiences</span>
                </span>

                <span id='Right'>
                    <span className='TextDarkSecondary'>Become a Host</span>
                    <img id='globe' src={globe} alt="Globe Icon" />
                    <span id='profilePill'>
                        <img id='menu' src={menu} alt="Menu Icon" />
                        <img id='Avatar' src={Avatar} alt="Avatar Icon" />
                    </span>
                </span>
            
            </span>
            
            
        </>
    )
}
export default Header;