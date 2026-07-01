import './Listing.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Assets
import bicycle from '../../assets/listingIcons/bicycle.svg';
import bone from '../../assets/listingIcons/bone.svg';
import camera from '../../assets/listingIcons/camera.svg';
import clock from '../../assets/listingIcons/clock.svg';
import creditCard from '../../assets/listingIcons/credit-card.svg';
import doorEnter from '../../assets/listingIcons/door-enter.svg';
import fire from '../../assets/listingIcons/fire.svg';
import garden from '../../assets/listingIcons/garden.svg';
import heart from '../../assets/listingIcons/heart.svg';
import kitchen from '../../assets/listingIcons/kitchen.svg';
import party from '../../assets/listingIcons/party.svg';
import refridgerator from '../../assets/listingIcons/refridgerator.svg';
import share from '../../assets/listingIcons/share.svg';
import shoppingCart from '../../assets/listingIcons/shopping-cart.svg';
import sparkles from '../../assets/listingIcons/sparkles-2.svg';
import sprayPaint from '../../assets/listingIcons/spray-paint.svg';
import star from '../../assets/listingIcons/star.svg';
import superhost from '../../assets/listingIcons/superhost.svg';
import washer from '../../assets/listingIcons/washer.svg';
import wind from '../../assets/listingIcons/wind.svg';
import wifi from '../../assets/listingIcons/wifi.svg';
import avatar from '../../assets/Avatar.svg';
import house from '../../assets/listingIcons/house.svg';
import dropdown from '../../assets/dropdown.svg';

import main1 from '../../assets/test/main.png';
import quad11 from '../../assets/test/quad1.png';
import quad22 from '../../assets/test/quad2.png';
import quad33 from '../../assets/test/quad3.png';
import quad44 from '../../assets/test/quad4.png';

// Components
import HeaderLight from '../../components/headerLight/HeaderLight';
import Footer from '../../components/footer/Footer';
import Button from '../../components/buttons/Button';
import { getAccommodation, getImageUrl, createReservation, getToken } from '../../api/api';

function Listing(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(2);
    const [reserveMsg, setReserveMsg] = useState('');

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const data = await getAccommodation(id);
                setListing(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchListing();
    }, [id]);

    const main = listing ? getImageUrl(listing.images?.main?.url) : main1;
    const quad1 = listing ? getImageUrl(listing.images?.quad1?.url) : quad11;
    const quad2 = listing ? getImageUrl(listing.images?.quad2?.url) : quad22;
    const quad3 = listing ? getImageUrl(listing.images?.quad3?.url) : quad33;
    const quad4 = listing ? getImageUrl(listing.images?.quad4?.url) : quad44;
    const name = listing?.name || 'Listing';
    const type = listing?.type || 'Entire home';
    const location = listing?.location || 'Cape Town';
    const host = listing?.host?.fullName || 'Host';
    const isSuperhost = listing?.host?.isSuperhost;
    const rating = listing?.rating || 0;
    const reviewCount = listing?.reviewCount || 0;
    const price = listing?.pricePerNight || 0;
    const bedrooms = listing?.numRooms || 1;
    const bathrooms = listing?.numBathrooms || 1;
    const maxGuests = listing?.maxGuests || 2;
    const weeklyDiscount = listing?.weeklyDiscount || 0;
    const cleaningFee = listing?.cleaningFee || 0;
    const serviceFee = listing?.serviceFee || 0;
    const occupancyTaxes = listing?.occupancyTaxes || 0;

    const nights = checkIn && checkOut
        ? Math.max(1, Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)))
        : 0;

    const subtotal = price * nights;
    const discount = nights >= 7 ? weeklyDiscount : 0;
    const total = subtotal - discount + cleaningFee + serviceFee + occupancyTaxes;

    const handleReserve = async () => {
        setReserveMsg('');

        if (!getToken()) {
            navigate('/login');
            return;
        }

        if (!checkIn || !checkOut) {
            setReserveMsg('Please select check-in and check-out dates');
            return;
        }

        try {
            await createReservation({
                accommodation: id,
                checkIn,
                checkOut,
                guests: Number(guests),
                totalPrice: total
            });
            setReserveMsg('Reservation created!');
        } catch (err) {
            setReserveMsg(err.message);
        }
    };

    if (loading) {
        return <div style={{ padding: '40px' }}>Loading listing...</div>;
    }

    if (error) {
        return <div style={{ padding: '40px', color: 'red' }}>{error}</div>;
    }

    return(
        <>
            <div id="listing">

                <HeaderLight />

                <div id='listing-body'>

                    <div id='title-bar'>
                        <div id='title-name'>{name}</div>
                        <div id='title-info'>
                            <div id='title-info-left'>
                                <img src={star}></img>
                                <div className='text-secondary-light'>{rating}</div>
                                <div>•</div>
                                <div className='text-secondary-light'>{reviewCount} reviews</div>
                                <div>•</div>
                                <img src={star}></img>
                                {isSuperhost && (<><div className='text-secondary-light'>Superhost</div></>)}
                                <div>•</div>
                                <div className='text-secondary-light'>{location}</div>
                            </div>
                            <div id='title-info-right'>
                                <div className='info-right-container'>
                                    <img src={share}></img>
                                    <div className='text-secondary-dark'>Share</div>
                                </div>
                                <div className='info-right-container'>
                                    <img src={heart}></img>
                                    <div className='text-secondary-dark'>Save</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='image-bar'>
                        <img src={main}></img>
                        <div id='image-quad'>
                            <img src={quad1}></img>
                            <img src={quad2}></img>
                            <img src={quad3}></img>
                            <img src={quad4}></img>
                        </div>
                    </div>

                    <div id='main-info'>
                        <div id='info'>
                            <div className='info-sec'>
                               <div>
                                    <div className='subtitle'>{type} hosted by {host}</div>
                                    <div className='detail-row'>
                                        <span className='text-secondary-dark'>{maxGuests} Guests</span>
                                        <span className='dot-separator'>•</span>
                                        <span className='text-secondary-dark'>{bedrooms} Bedroom</span>
                                        <span className='dot-separator'>•</span>
                                        <span className='text-secondary-dark'>{bathrooms} Bathroom</span>
                                    </div>
                                </div>
                                <div id='profile'>
                                    <img src={avatar}></img>
                                    {isSuperhost && (<><img src={superhost}></img></>)}
                                </div>
                            </div>
                            <div className='info-sec'>
                                {listing?.amenities?.entireHome && (
                                <div className='info-entry'>
                                    <img src={house}></img>
                                    <div className='entry'>
                                        <div className='text-primary-dark'>Entire Home</div>
                                        <div className='text-secondary-light'>You'll have the apartment to yourself.</div>
                                    </div>
                                </div>
                                )}
                                {listing?.amenities?.enhancedClean && (
                                <div className='info-entry'>
                                    <img src={sparkles}></img>
                                    <div className='entry'>
                                        <div className='text-primary-dark'>Enhanced Clean</div>
                                        <div className='text-secondary-light'>This Host committed to Airbnb's 5 step enhanced cleaning process.</div>
                                    </div>
                                </div>
                                )}
                                {listing?.amenities?.selfCheckIn && (
                                <div className='info-entry'>
                                    <img src={doorEnter}></img>
                                    <div className='entry'>
                                        <div className='text-primary-dark'>Self Check-in</div>
                                        <div className='text-secondary-light'>Check yourself in with the keypad.</div>
                                    </div>
                                </div>
                                )}
                            </div>
                            <div className='info-sec'>
                                <p>{listing?.description}</p>
                            </div>
                        </div>
                        <div id='bill'>
                            <div id='bill-container'>
                                <div className="result-price">
                                    <div className="price-amount">R{price}</div>
                                    <div className="price-period">/ night</div>
                                </div>
                                <div id='booking-summary'>
                                    <div id='booking-summary-top'>
                                        <div id='check-in' className='booking-block'>
                                            <div className='small-dark'>CHECK-IN</div>
                                            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                                        </div>
                                        <div id='check-out' className='booking-block'>
                                            <div className='small-dark'>CHECK-OUT</div>
                                            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
                                        </div>
                                    </div>
                                    <div id='booking-summary-bottom'>
                                        <div id='guests' className='booking-block'>
                                            <div className='small-dark'>GUESTS</div>
                                            <input type="number" min="1" max={maxGuests} value={guests} onChange={(e) => setGuests(e.target.value)} />
                                        </div>
                                        <img src={dropdown}></img>
                                    </div>
                                </div>
                                <div onClick={handleReserve}>
                                    <Button fg="white" bg="#DE3151" text="Reserve" width='322px' height='44px'/>
                                </div>
                                {reserveMsg && <div className='text-secondary-light'>{reserveMsg}</div>}
                                <div className='text-secondary-light'>You won't be charged yet</div>
                                <div id='costs'>
                                    {nights > 0 && (
                                    <div className='cost-entry'>
                                        <div className='text-primary-dark-2'>R{price} x {nights} nights</div>
                                        <div className='text-primary-dark-2'>R{subtotal}</div>
                                    </div>
                                    )}
                                    {discount > 0 && (
                                    <div className='cost-entry'>
                                        <div className='text-primary-dark-2'>Weekly discount</div>
                                        <div className='text-primary-dark-2'>-R{discount}</div>
                                    </div>
                                    )}
                                    <div className='cost-entry'>
                                        <div className='text-primary-dark-2'>Cleaning fee</div>
                                        <div className='text-primary-dark-2'>R{cleaningFee}</div>
                                    </div>
                                    <div className='cost-entry'>
                                        <div className='text-primary-dark-2'>Service fee</div>
                                        <div className='text-primary-dark-2'>R{serviceFee}</div>
                                    </div>
                                    <div className='cost-entry'>
                                        <div className='text-primary-dark-2'>Occupancy taxes</div>
                                        <div className='text-primary-dark-2'>R{occupancyTaxes}</div>
                                    </div>
                                </div>
                                <div className='cost-entry'>
                                    <div className='text-primary-dark-2'>Total</div>
                                    <div className='text-primary-dark-2'>R{total}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='amenities'>
                        <div className='subtitle'>What this place offers</div>
                        <div id='amenities-container'>
                            {listing?.amenities?.garden && (
                            <div className='amenity'>
                                <img src={garden}></img>
                                <div className='text-primary-dark-2'>Garden View</div>
                            </div>
                            )}
                            {listing?.amenities?.wifi && (
                            <div className='amenity'>
                                <img src={wifi}></img>
                                <div className='text-primary-dark-2'>WiFi</div>
                            </div>
                            )}
                            {listing?.amenities?.washer && (
                            <div className='amenity'>
                                <img src={washer}></img>
                                <div className='text-primary-dark-2'>Free Washer</div>
                            </div>
                            )}
                            {listing?.amenities?.aircon && (
                            <div className='amenity'>
                                <img src={wind}></img>
                                <div className='text-primary-dark-2'>Central air conditioning</div>
                            </div>
                            )}
                            {listing?.amenities?.pets && (
                            <div className='amenity'>
                                <img src={bone}></img>
                                <div className='text-primary-dark-2'>Pets allowed</div>
                            </div>
                            )}
                        </div>
                    </div>

                    <div id='host'>
                        <div id='host-top'>
                            <img src={avatar}></img>
                            <div id='host-info'>
                                <div className='subtitle'>Hosted by {host}</div>
                                <div className='text-secondary-light'>Joined May 2021</div>
                            </div>
                        </div>
                        {isSuperhost && <div className='text-primary-dark'>{host} is a Superhost</div>}
                        <div className='text-secondary-light'>Superhosts are experienced, highly rated hosts who are<br/>committed to providing great stays for guests.</div>
                        <div className='text-secondary-light'>Response rate: 100%</div>
                        <div className='text-secondary-light'>Response time: within an hour</div>
                        <Button text='Contact Host'/>
                    </div>

                    <div id='rules'>
                        <div className='subtitle'>Things to know</div>
                        <div id='rule-set-container'>
                            <div className='rule-set'>
                                <div className='text-dark-primary'>House rules</div>
                                <div className='rule'>
                                    <img src={clock}></img>
                                    <div className='text-primary-dark-2'>Check-in: After 4:00 PM</div>
                                </div>
                                <div className='rule'>
                                    <img src={clock}></img>
                                    <div className='text-primary-dark-2'>Checkout: 10:00 AM</div>
                                </div>
                                <div className='rule'>
                                    <img src={doorEnter}></img>
                                    <div className='text-primary-dark-2'>Self check-in with lockbox</div>
                                </div>
                                <div className='rule'>
                                    <img src={shoppingCart}></img>
                                    <div className='text-primary-dark-2'>Not suitable for infants (under 2 years)</div>
                                </div>
                                <div className='rule'>
                                    <img src={fire}></img>
                                    <div className='text-primary-dark-2'>No smoking</div>
                                </div>
                                <div className='rule'>
                                    <img src={bone}></img>
                                    <div className='text-primary-dark-2'>No pets</div>
                                </div>
                                <div className='rule'>
                                    <img src={party}></img>
                                    <div className='text-primary-dark-2'>No parties or events</div>
                                </div>
                            </div>
                            <div className='rule-set'>
                                <div className='text-dark-primary'>Health & safety</div>
                                <div className='rule'>
                                    <img src={sparkles}></img>
                                    <div className='text-primary-dark-2'>Committed to Airbnb's enhanced cleaning process.</div>
                                </div>
                                <div className='rule'>
                                    <img src={sprayPaint}></img>
                                    <div className='text-primary-dark-2'>Airbnb's social-distancing and other COVID-19 related guidelines apply</div>
                                </div>
                                <div className='rule'>
                                    <img src={wind}></img>
                                    <div className='text-primary-dark-2'>Carbon monoxide alarm</div>
                                </div>
                                <div className='rule'>
                                    <img src={washer}></img>
                                    <div className='text-primary-dark-2'>Smoke alarm</div>
                                </div>
                                <div className='rule'>
                                    <img src={creditCard}></img>
                                    <div className='text-primary-dark-2'>Security Deposit - if you damage the home, you may be charged up to R 1000</div>
                                </div>
                            </div>
                            <div className='rule-set'>
                                <div className='text-dark-primary'>Cancellation policy</div>
                                <div className='rule'>
                                    <div className='text-primary-dark-2'>Free cancellation before Feb 14</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            
            </div>
        </>
    )
}
export default Listing;
