import './HeaderLight.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Components
import SearchBarInactive from '../searchBar/searchBarInactive/SearchBarInactive';

// Assets
import logolight from '../../assets/LogoLight.svg';
import globedark from '../../assets/footer/globe.svg';
import menu from '../../assets/menu.svg';
import Avatar from '../../assets/Avatar.svg';
import { getUser, logout } from '../../api/api';

function HeaderLight({searchBar = true}){
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const user = getUser();

    const handleLogout = () => {
        logout();
        setShowMenu(false);
        navigate('/');
    };

    return(
        <>
            <span id='headerLight'>
            
                <span id='logo'>
                    <Link to='/'>
                        <img id='LogoDark' src={logolight} alt="Airbnb Logo" />
                    </Link>
                </span>

                <span id='Pages'>
                    {searchBar&&(<><SearchBarInactive /></>)}
                    {/* <SearchBarInactive /> */}
                </span>

                <span id='Right'>
                    {user ? (
                        <span className='TextDarkSecondary'>Hi, {user.fullName || user.username}</span>
                    ) : (
                        <Link to='/login' className='TextDarkSecondary'>Become a Host</Link>
                    )}
                    <img id='globe' src={globedark} alt="Globe Icon" />
                    <span id='profilePill' onClick={() => setShowMenu(!showMenu)} style={{ cursor: 'pointer', position: 'relative' }}>
                        <img id='menu' src={menu} alt="Menu Icon" />
                        <img id='Avatar' src={Avatar} alt="Avatar Icon" />
                        {showMenu && (
                            <div style={{ position: 'absolute', right: 0, top: '50px', background: 'white', border: '1px solid #ddd', borderRadius: '8px', padding: '10px', zIndex: 100, minWidth: '150px' }}>
                                {!user && <div onClick={() => navigate('/login')} style={{ padding: '8px', cursor: 'pointer' }}>Login</div>}
                                {user && !user.isHost && <div onClick={() => navigate('/user')} style={{ padding: '8px', cursor: 'pointer' }}>My Reservations</div>}
                                {user && user.isHost && <div onClick={() => navigate('/admin/viewreservations')} style={{ padding: '8px', cursor: 'pointer' }}>View Reservations</div>}
                                {user && user.isHost && <div onClick={() => navigate('/admin')} style={{ padding: '8px', cursor: 'pointer' }}>Admin Dashboard</div>}
                                {user && <div onClick={handleLogout} style={{ padding: '8px', cursor: 'pointer' }}>Log out</div>}
                            </div>
                        )}
                    </span>
                </span>
            
            </span>
            
            
        </>
    )
}
export default HeaderLight;
