import './Search.css';

// Components
import Footer from '../../components/footer/Footer';
import HeaderLight from '../../components/headerLight/HeaderLight';
import ResultCard from '../../components/resultCard/ResultCard';

// Assets
import listing1 from '../../assets/test/listing1.png';
import listing2 from '../../assets/test/listing2.png';
import listing3 from '../../assets/test/listing3.png';

function Search(){
    return(
        <>
            <div id='search-page'>
                <HeaderLight />
                <div id='search-results'>

                    <div id='filters-section'></div>

                    <div id='search-results'>

                        <ResultCard
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

                        <ResultCard
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

                        <ResultCard
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
                <Footer />
            </div>
        </>
    )
}
export default Search;