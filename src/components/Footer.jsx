import React from 'react';
import { Link } from 'react-router-dom';

import instaImg1 from '../assets/instagram-1.jpg';
import instaImg2 from '../assets/instagram-2.jpg';
import instaImg3 from '../assets/instagram-3.jpg';
import instaImg4 from '../assets/instagram-4.jpg';
import instaImg5 from '../assets/instagram-5.jpg';
import instaImg6 from '../assets/instagram-6.jpg';

const Footer = () => {
    return (
        <>
            <footer className='section__container footer__container'>
                <div className='footer__col'>
                    <h4>CONTACT INFO</h4>
                    <p>
                        <span className='ri-map-pin-2-fill'></span>
                        194, Madawala East, Minuwangoda
                    </p>
                    <p>
                        <span className='ri-mail-fill'></span>
                        info@esolution.web.lk
                    </p>
                    <p>
                        <span className='ri-phone-fill'></span>
                        (+94) 71 75 75 721
                    </p>
                </div>
                <div className='footer__col'>
                    <h4>COMPANY</h4>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/blogs'>Our Blogs</Link>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                    <Link to='/terms-of-service'>Terms of Service</Link>
                </div>
                <div className='footer__col'>
                    <h4>USEFULL LINKS</h4>
                    <Link to='/help'>Help</Link>
                    <Link to='/tracking'>Track your order</Link>
                    <Link to='/men'>Men</Link>
                    <Link to='/women'>Women</Link>
                    <Link to='/dresses'>Dresses</Link>
                </div>
                <div className='footer__col'>
                    <h4>INSTAGRAM</h4>
                    <div className='instagram__grid'>
                        <img src={instaImg1} alt="Instagram Image" />
                        <img src={instaImg2} alt="Instagram Image" />
                        <img src={instaImg3} alt="Instagram Image" />
                        <img src={instaImg4} alt="Instagram Image" />
                        <img src={instaImg5} alt="Instagram Image" />
                        <img src={instaImg6} alt="Instagram Image" />
                    </div>
                </div>
            </footer>
            <div className='footer__bar'>
                Copyright &copy; 2025 CoreStack Solutions (PVT) Ltd. All Rights Reserved.
            </div>
        </>
    );
}

export default Footer;