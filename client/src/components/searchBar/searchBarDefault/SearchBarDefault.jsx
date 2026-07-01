import './SearchBarDefault.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Assets
import dropdown from '../../../assets/dropdown.svg';
import search from '../../../assets/searchIcon.svg';

function SearchBarDefault(){
    const navigate = useNavigate();
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        navigate(`/search?location=${encodeURIComponent(location)}`);
    };

    return(
        <>
            <span id='SearchBarDefault'>
                <span id="bar">
                    <span id="seg1" className="seg icon">
                        <span id='seg-text'>
                            <span className="text-primary">Hotels</span>
                            <input
                                className="text-secondary"
                                style={{ border: 'none', background: 'transparent', width: '100%' }}
                                placeholder="Select Hotel"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </span>
                        <img id='dropdown' src={dropdown} alt="Dropdown Icon" />
                    </span>

                    <span id="seg2" className="seg">
                        <span className="text-primary">Check in</span>
                        <span className="text-secondary">Add dates</span>
                    </span>

                    <span id="seg3" className="seg">
                        <span className="text-primary">Check out</span>
                        <span className="text-secondary">Add dates</span>
                    </span>

                    <span id="seg4" className="seg icon" onClick={handleSearch} style={{ cursor: 'pointer' }}>
                        <span id='seg-text'>
                            <span className="text-primary">Guests</span>
                            <span className="text-secondary">Add guests</span>
                        </span>
                        <span id='circle'>
                            <img id='search' src={search} alt="Search Icon" />
                        </span>
                    </span>
                </span>
            </span>

        </>
    )
}
export default SearchBarDefault;
