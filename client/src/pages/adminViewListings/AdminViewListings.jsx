import './AdminViewListings.css';

// Assets

// Components
import AdminCard from '../../components/adminCard/AdminCard';

// Test
import listing1 from '../../assets/test/listing1.png';
import listing2 from '../../assets/test/listing2.png';
import listing3 from '../../assets/test/listing3.png';

function AdminViewListings(){
    return(
        <>
            <div id='admin-view-listings'>
                <div id='avl-heading'>My Hotel List</div>
                <div id='avl-main'>
                    <div id='search-results'>

                        <AdminCard
                        key={1}
                        image={listing1}
                        type="Entire home"
                        location="Camps Bay"
                        name="Stunning Ocean View Villa"
                        hasGarden = {true}
                        hasWifi= {true}
                        hasWasher= {true}
                        pets= {true}
                        rating={4}
                        reviewCount={5}
                        price={23}
                        bedrooms={2}
                        bathrooms={2}
                        maxGuests={4}
                        />

                        <AdminCard
                        image={listing2}
                        type="Flat"
                        location="Sandton"
                        name="Modern City Apartment"
                        rating={4.7}
                        reviewCount={56}
                        price={1800}
                        bedrooms={2}
                        bathrooms={1}
                        maxGuests={4}
                        hasGarden={false}
                        hasWifi={true}
                        hasWasher={false}
                        pets={false}
                        />

                        <AdminCard
                        image={listing3}
                        type="Private room"
                        location="Stellenbosch"
                        name="Cozy Room in Wine Farm"
                        rating={4.5}
                        reviewCount={32}
                        price={750}
                        bedrooms={1}
                        bathrooms={1}
                        maxGuests={2}
                        hasGarden={true}
                        hasWifi={true}
                        hasWasher={true}
                        pets={false}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminViewListings;