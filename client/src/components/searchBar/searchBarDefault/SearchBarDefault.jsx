import './SearchBarDefault.css'

// Assets
import dropdown from '../../../assets/dropdown.svg';
import search from '../../../assets/searchIcon.svg';

function SearchBarDefault(){
    return(
        <>
            <span id='SearchBarDefault'>
                <span id="bar">
                    <span id="seg1" className="seg icon">
                        <span id='seg-text'>
                            <span className="text-primary">Hotels</span>
                            <span className="text-secondary">Select Hotel</span>
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

                    <span id="seg4" className="seg icon">
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