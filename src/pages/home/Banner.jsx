import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/header.png';

const Banner = () => {
    return (
        <div className='section__container header__container'>
            <div className='header__content z-30'>
                <h4 className='uppercase'>UP TO 20% Discount on</h4>
                <h1>Girl's Fashion</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus eligendi velit corporis aliquid sequi at quod! Aut perferendis non fugit dolores! Voluptatum esse enim aliquid temporibus fuga officia voluptate.</p>
                <button className='btn'><Link to='/shop'>EXPLORE NOW</Link></button>
            </div>
            <div className='header__image'>
                <img src={bannerImg} alt="banner image" />
            </div>
        </div>
    )
}

export default Banner;