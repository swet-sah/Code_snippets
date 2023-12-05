import React from 'react';
import { BsEnvelopeFill, BsFacebook, BsInstagram, BsTelephoneFill, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6'
import './Footer.css';
import DonateNowBtn from '../Donation/DonateNowBtn';
const Footer = () => {
    const name = "mysite"
    const date = new Date();
    const year = date.getFullYear();
    return (
        <section>
            <footer className='footer'>
                <div className="footer-content">
                    <p>&copy; {year} All rights reserved.</p>
                    <p>
                        {name} is a registered non-profit organization (Registration number: 1254658).
                    </p>
                    <p>  <FaLocationDot /> Address: <br />
                        {name} at 4th floor near westBengal-783923 India
                    </p>
                    <p><BsTelephoneFill className='m-2' />Phone: <a href="tel:++765457 47394">+765457 47394</a> |<BsEnvelopeFill className='ms-2' /> Email: <a href="mailto:mildredy114@gmail.com">mildredy114@gmail.com</a></p>

                    <div className="social-media-icons ">
                        <Link><BsFacebook size={"25px"} color='#3b5998' /></Link>
                        <Link><BsTwitter size={"25px"} color='#1DA1F2' /></Link>
                        <Link><BsYoutube size={"25px"} color='#FF0000' /></Link>
                        <Link><BsInstagram size={"25px"} className='insta-color' /></Link>
                    </div>

                    <div className="donation-button">
                        <DonateNowBtn/>
                    </div>

                    <p>
                        Disclaimer: This is a legal site
                    </p>

                    <div className="footer-links">
                        <Link to='/'>Privacy Policy</Link> | <Link to='/'>Terms of Service</Link> | <Link to='/'>Sitemap</Link>
                    </div>
                </div>

            </footer>
        </section>
    );
}

export default Footer;
