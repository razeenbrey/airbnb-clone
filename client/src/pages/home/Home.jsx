import './Home.css';

// Components
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import SearchBarDefault from '../../components/searchBar/searchBarDefault/SearchBarDefault';
import Button from '../../components/buttons/Button';

// Assets
import hero from '../../assets/hero.svg';

import ipic1 from '../../assets/home/Sandton.png'
import ipic2 from '../../assets/home/Joburg.png'
import ipic3 from '../../assets/home/Woodmead.png'
import ipic4 from '../../assets/home/Hyde.png'

import dpic1 from '../../assets/home/Discover1.png'
import dpic2 from '../../assets/home/Discover2.png'
import gift from '../../assets/home/giftCards.png'
import hosting from '../../assets/home/Hosting.png'

function Home(){
    return(
        <>

            <section id='black-section'>

                <section id="Section-Hero">
                    <Header />
                    <SearchBarDefault />
                </section>

                <section id="Section-Main">
                    <img id='hero' src={hero} alt="Image of modern house"></img>
                    <span id='text-center'>
                        <span id='text-main'>Not sure where to go? Perfect.</span>
                        <button id='hero-button'>
                            <span className= 'gradient-text'>I'm flexible</span>
                        </button>
                    </span>
                </section>

            </section>

            <section id='other'>

                <span id='inspiration'>
                    <span className='other-text-primary'>Inspiration for your next trip</span>
                    <span id='inspo-container'>

                        <span className='inspo-card'>
                            <img className='i-card-pic' src={ipic1}></img>
                            <span id='card-1' className='i-card-lower'>
                                <span className='i-card-content'>
                                    <span className='i-text-primary'>Sandton City Hotel</span>
                                    <span className='i-text-secondary'>53km away</span>
                                </span>
                            </span>
                        </span>

                        <span className='inspo-card'>
                            <img className='i-card-pic' src={ipic2}></img>
                            <span id='card-2' className='i-card-lower'>
                                <span className='i-card-content'>
                                    <span className='i-text-primary'>Joburg City<br/>Hotel</span>
                                    <span className='i-text-secondary'>53km away</span>
                                </span>
                            </span>
                        </span>

                        <span className='inspo-card'>
                            <img className='i-card-pic' src={ipic3}></img>
                            <span id='card-3' className='i-card-lower'>
                                <span className='i-card-content'>
                                    <span className='i-text-primary'>Woodmead<br/>Hotel</span>
                                    <span className='i-text-secondary'>53km away</span>
                                </span>
                            </span>
                        </span>

                        <span className='inspo-card'>
                            <img className='i-card-pic' src={ipic4}></img>
                            <span id='card-4' className='i-card-lower'>
                                <span className='i-card-content'>
                                    <span className='i-text-primary'>Hyde Park<br/>Hotel</span>
                                    <span className='i-text-secondary'>53km away</span>
                                </span>
                            </span>
                        </span>

                    </span>
                </span>

                <span id='discover'>
                    <span className='other-text-primary'>Discover Airbnb Experiences</span>
                    <span id='discover-container'>

                        <span className='d-pic-container'>
                            <img src={dpic1} className='d-pic' alt="Travel" />
                            <div className='d-pic-content'>
                                <span className='i-text-primary discover'>Things to do on your trip</span>
                                <Button fg='#374151' bg='white' text='Experiences' />
                            </div>
                        </span>

                        <span className='d-pic-container'>
                            <img src={dpic2} className='d-pic' alt="Travel" />
                            <div className='d-pic-content'>
                                <span className='i-text-primary discover'>Things to do from home</span>
                                <Button fg='#374151' bg='white' text='Experiences' />
                            </div>
                        </span>

                    </span>
                </span>

                <span id='shop'>
                    <img src={gift} alt="Travel" />
                </span>

                <span id='questions-hosting'>
                    <img src={hosting} alt="Travel" />
                </span>
            
            </section>

            <Footer />

        </>
    )
}
export default Home;