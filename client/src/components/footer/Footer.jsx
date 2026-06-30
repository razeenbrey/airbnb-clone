import '../footer/Footer.css';

import social1 from '../../assets/footer/facebook.svg';
import social2 from '../../assets/footer/insta.svg';
import social3 from '../../assets/footer/twitter.svg';
import fglobe from '../../assets/footer/globe.svg';

function Footer(){
    return(
        <>
            <div id="footer">

                <div id="footer-body">
                    <div className='f-sec'>
                        <div className='f-sec-heading'>Support</div>
                        <ul className='f-sec-content'>
                            <li>Help Center</li>
                            <li>Safety information</li>
                            <li>Cancellation options</li>
                            <li>Our Covid-19 Response</li>
                            <li>Supporting people with disabilities</li>
                            <li>Report a neighbourhood concern</li>
                        </ul>
                    </div>

                    <div className='f-sec'>
                        <div className='f-sec-heading'>Community</div>
                        <ul className='f-sec-content'>
                            <li>Airbnb.org: disaster relief housing</li>
                            <li>Support: Afghan refugees</li>
                            <li>Celebrating diversity & belonging</li>
                            <li>Combating discrimination</li>
                        </ul>
                    </div>

                    <div className='f-sec'>
                        <div className='f-sec-heading'>Hosting</div>
                        <ul className='f-sec-content'>
                            <li>Try hosting</li>
                            <li>AirCover: protection for hosts</li>
                            <li>Explore hosting resources</li>
                            <li>Visit our community forum</li>
                            <li>How to host responsibly</li>
                        </ul>
                    </div>

                    <div className='f-sec'>
                        <div className='f-sec-heading'>About</div>
                        <ul className='f-sec-content'>
                            <li>Newsroom</li>
                            <li>Learn about new features</li>
                            <li>Letter from our founders</li>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Airbnb Luxe</li>
                        </ul>
                    </div>

                </div>

                <div id="footer-lower">
                    <div id='f-left'>
                        © 2026 Airbnb, Inc. • Privacy • Terms • Sitemap
                    </div>
                    <div id='f-right'>
                        <div id='f-lang'>
                            <img src={fglobe}></img>
                            <div>English (UK)</div>
                        </div>
                        <div>ZAR</div>
                        <div id='f-socials'>
                            <img src={social1}></img>
                            <img src={social2}></img>
                            <img src={social3}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;