import './AdminViewListings.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import AdminCard from '../../components/adminCard/AdminCard';
import { getMyAccommodations, deleteAccommodation, getImageUrl } from '../../api/api';

function AdminViewListings(){
    const navigate = useNavigate();
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchListings = async () => {
        try {
            setLoading(true);
            const data = await getMyAccommodations();
            setListings(data.data || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchListings();
    }, []);

    const handleDelete = async (listingId) => {
        if (!window.confirm('Delete this listing?')) return;

        try {
            await deleteAccommodation(listingId);
            setListings(listings.filter(l => l._id !== listingId));
        } catch (err) {
            alert(err.message);
        }
    };

    const handleUpdate = (listingId) => {
        navigate(`/admin/editlisting/${listingId}`);
    };

    return(
        <>
            <div id='admin-view-listings'>
                <div id='avl-heading'>My Hotel List</div>
                <div id='avl-main'>
                    {loading && <div>Loading listings...</div>}
                    {error && <div style={{ color: 'red' }}>{error}</div>}

                    <div id='search-results'>

                        {listings.map((listing) => (
                        <AdminCard
                        key={listing._id}
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
                        onUpdate={() => handleUpdate(listing._id)}
                        onDelete={() => handleDelete(listing._id)}
                        />

                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminViewListings;
