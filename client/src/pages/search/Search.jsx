import './Search.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Components
import Footer from '../../components/footer/Footer';
import HeaderLight from '../../components/headerLight/HeaderLight';
import ResultCard from '../../components/resultCard/ResultCard';
import { getAccommodations, getImageUrl } from '../../api/api';

function Search(){
    const [searchParams] = useSearchParams();
    const location = searchParams.get('location') || '';
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchListings = async () => {
            try {
                setLoading(true);
                const data = await getAccommodations(location);
                setListings(data.data || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchListings();
    }, [location]);

    return(
        <>
            <div id='search-page'>
                <HeaderLight />
                <div id='search-results'>

                    <div id='filters-section'>
                        <h2>
                            {location ? `${listings.length} stays in ${location}` : `${listings.length} stays available`}
                        </h2>
                    </div>

                    <div id='search-results'>

                        {loading && <div>Loading listings...</div>}
                        {error && <div style={{ color: 'red' }}>{error}</div>}

                        {!loading && listings.map((listing) => (
                            <ResultCard
                                key={listing._id}
                                id={listing._id}
                                image={getImageUrl(listing.images?.main?.url)}
                                type={listing.type}
                                location={listing.location}
                                name={listing.name}
                                hasGarden={listing.amenities?.garden}
                                hasWifi={listing.amenities?.wifi}
                                hasWasher={listing.amenities?.washer}
                                pets={listing.amenities?.pets}
                                rating={listing.rating}
                                reviewCount={listing.reviewCount}
                                price={listing.pricePerNight}
                                bedrooms={listing.numRooms}
                                bathrooms={listing.numBathrooms}
                                maxGuests={listing.maxGuests}
                            />
                        ))}

                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}
export default Search;
