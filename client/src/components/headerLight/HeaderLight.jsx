import './HeaderLight.css';

// Components
import SearchBarInactive from '../searchBar/searchBarInactive/SearchBarInactive';

// Assets
import logolight from '../../assets/LogoLight.svg';
import globedark from '../../assets/footer/globe.svg';
import menu from '../../assets/menu.svg';
import Avatar from '../../assets/Avatar.svg';

function HeaderLight(){
    return(
        <>
            <span id='headerLight'>
            
                <span id='logo'>
                    <img id='LogoDark' src={logolight} alt="Airbnb Logo" />
                </span>

                <span id='Pages'>
                    <SearchBarInactive />
                </span>

                <span id='Right'>
                    <span className='TextDarkSecondary'>Become a Host</span>
                    <img id='globe' src={globedark} alt="Globe Icon" />
                    <span id='profilePill'>
                        <img id='menu' src={menu} alt="Menu Icon" />
                        <img id='Avatar' src={Avatar} alt="Avatar Icon" />
                    </span>
                </span>
            
            </span>
            
            
        </>
    )
}
export default HeaderLight;