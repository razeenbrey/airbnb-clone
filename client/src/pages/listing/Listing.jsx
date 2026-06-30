import './Listing.css';

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

function Listing({
    main,
    quad1,
    quad2,
    quad3,
    quad4, 
    name,
    type,        // "Entire home", "Private room", "Shared room", "Flat", etc.
    location,    // "Cape Town", "Sandton", etc.
    host,
    isSuperhost,
    isEntireHome,
    isSelfCheckIn,
    isEnhancedClean,
    hasGarden,
    hasWifi,
    hasWasher,
    hasAircon,
    pets,
    rating, 
    reviewCount, 
    price,
    bedrooms,
    bathrooms,
    maxGuests 
}){
    return(
        <>
            <div id="listing">

                <HeaderLight />

                <div id='listing-body'>

                    <div id='title-bar'>
                        <div id='title-name'>Bordeux Getaway</div>
                        <div id='title-info'>
                            <div id='title-info-left'>
                                <img src={star}></img>
                                <div className='text-secondary-light'>5.0</div>
                                <div>•</div>
                                <div className='text-secondary-light'>7 reviews</div>
                                <div>•</div>
                                <img src={star}></img>
                                <div className='text-secondary-light'>Superhost</div>
                                <div>•</div>
                                <div className='text-secondary-light'>Location</div>
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
                        <img src={main1}></img>
                        <div id='image-quad'>
                            <img src={quad11}></img>
                            <img src={quad22}></img>
                            <img src={quad33}></img>
                            <img src={quad44}></img>
                        </div>
                    </div>

                    <div id='main-info'>
                        <div id='info'>
                            <div className='info-sec'>
                               <div>
                                    <div className='subtitle'>Entire rental unit hosted by Ghazal</div>
                                    <div className='detail-row'>
                                        <span className='text-secondary-dark'>2 Guests</span>
                                        <span className='dot-separator'>•</span>
                                        <span className='text-secondary-dark'>1 Bedroom</span>
                                        <span className='dot-separator'>•</span>
                                        <span className='text-secondary-dark'>1 Bathroom</span>
                                    </div>
                                </div>
                                <div id='profile'>
                                    <img src={avatar}></img>
                                    <img src={superhost}></img>
                                </div>
                            </div>
                            <div className='info-sec'>
                                <div className='info-entry'>
                                    <img src={house}></img>
                                    <div className='entry'>
                                        <div className='text-primary-dark'>Entire Home</div>
                                        <div className='text-secondary-light'>You'll have the apartment to yourself.</div>
                                    </div>
                                </div>
                                <div className='info-entry'>
                                    <img src={sparkles}></img>
                                    <div className='entry'>
                                        <div className='text-primary-dark'>Enhanced Clean</div>
                                        <div className='text-secondary-light'>This Host committed to Airbnb's 5 step enhanced cleaning process.</div>
                                    </div>
                                </div>
                                <div className='info-entry'>
                                    <img src={doorEnter}></img>
                                    <div className='entry'>
                                        <div className='text-primary-dark'>Self Check-in</div>
                                        <div className='text-secondary-light'>Check yourself in with the keypad.</div>
                                    </div>
                                </div>
                            </div>
                            <div className='info-sec'>
                                <p>Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux. Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44.</p>
                            </div>
                        </div>
                        <div id='bill'>
                            <div id='bill-container'>
                                <div className="result-price">
                                    <div className="price-amount">R22</div>
                                    <div className="price-period">/ night</div>
                                </div>
                                <div id='booking-summary'>
                                    <div id='booking-summary-top'>
                                        <div id='check-in' className='booking-block'>
                                            <div className='small-dark'>CHECK-IN</div>
                                            <div className='text-secondary-light'>2/19/2022</div>
                                        </div>
                                        <div id='check-out' className='booking-block'>
                                            <div className='small-dark'>CHECK-OUT</div>
                                            <div className='text-secondary-light'>2/19/2022</div>
                                        </div>
                                    </div>
                                    <div id='booking-summary-bottom'>
                                        <div id='guests' className='booking-block'>
                                            <div className='small-dark'>GUESTS</div>
                                            <div className='text-secondary-light'>2 guests</div>
                                        </div>
                                        <img src={dropdown}></img>
                                    </div>
                                </div>
                                <Button fg="white" bg="#DE3151" text="Reserve" width='322px' height='44px'/>
                                <div className='text-secondary-light'>You won't be charged yet</div>
                                <div id='costs'>
                                    <div className='cost-entry'>
                                        <div className='text-primary-dark-2'>R24 x 10 nights</div>
                                        <div className='text-primary-dark-2'>R240</div>
                                    </div>
                                    <div className='cost-entry'>
                                        <div className='text-primary-dark-2'>Weekly discount</div>
                                        <div className='text-primary-dark-2'>R20</div>
                                    </div>
                                    <div className='cost-entry'>
                                        <div className='text-primary-dark-2'>Cleaning fee</div>
                                        <div className='text-primary-dark-2'>R40</div>
                                    </div>
                                    <div className='cost-entry'>
                                        <div className='text-primary-dark-2'>Service fee</div>
                                        <div className='text-primary-dark-2'>R70</div>
                                    </div>
                                </div>
                                <div className='cost-entry'>
                                    <div className='text-primary-dark-2'>Total</div>
                                    <div className='text-primary-dark-2'>R240</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='amenities'>
                        <div className='subtitle'>What this place offers</div>
                        <div id='amenities-container'>
                            <div className='amenity'>
                                <img src={garden}></img>
                                <div className='text-primary-dark-2'>Garden View</div>
                            </div>
                            <div className='amenity'>
                                <img src={wifi}></img>
                                <div className='text-primary-dark-2'>WiFi</div>
                            </div>
                            <div className='amenity'>
                                <img src={washer}></img>
                                <div className='text-primary-dark-2'>Free Washer</div>
                            </div>
                            <div className='amenity'>
                                <img src={wind}></img>
                                <div className='text-primary-dark-2'>Central air conditioning</div>
                            </div>
                            <div className='amenity'>
                                <img src={bone}></img>
                                <div className='text-primary-dark-2'>Pets allowed</div>
                            </div>
                        </div>
                    </div>

                    <div id='host'>
                        <div id='host-top'>
                            <img src={avatar}></img>
                            <div id='host-info'>
                                <div className='subtitle'>Hosted by Ghazal</div>
                                <div className='text-secondary-light'>Joined May 2021</div>
                            </div>
                        </div>
                        <div className='text-primary-dark'>Ghazal is a Superhost</div>
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