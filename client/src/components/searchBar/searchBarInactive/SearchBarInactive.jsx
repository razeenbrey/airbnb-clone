import './SearchBarInactive.css'

// Assets
import search from '../../../assets/searchIcon.svg';

function SearchBarInactive(){
    return(
        <>
            <span id='SearchBarInactive'>
                <span id="bar">
                    <span id="seg1" className="seg">
                        <span id='seg-text'>
                            <span className="text-primary">search-Hotel</span>
                        </span>
                    </span>

                    <span id="seg2" className="seg">
                        <span className="text-primary">search-Check-in</span>
                    </span>

                    <span id="seg3" className="seg">
                        <span className="text-primary">search-Check-out</span>
                    </span>

                    <span id="seg4" className="seg icon">
                        <span id='seg-text'>
                            <span className="text-primary">search-Guests</span>
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
export default SearchBarInactive;