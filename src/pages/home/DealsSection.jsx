import React from 'react';
import dealsImage from '../../assets/deals.png';

const DealsSection = () => {
    return (
        <section className='section__container deals__container'>
            <div className='deals__image'>
                <img src={dealsImage} alt="Deals" />
            </div>

            <div className='deals__content'>
                <h5>Get Up to 25% Discount</h5>
                <h4>Deals of this Month</h4>
                <p>Our Women's Fashion Deals of the Month are here to make your style dreams a reality without breaking the bank. Discover a curated collection of exquisite clothing, accessories, and footwear, all handpicked to elevate your wardrobe.</p>
                <div className='deals__countdown flex-wrap'>
                    <div className='deals__countdown__card'>
                        <h4>14</h4>
                        <p>Day</p>
                    </div>
                    <div className='deals__countdown__card'>
                        <h4>15</h4>
                        <p>Hours</p>
                    </div>
                    <div className='deals__countdown__card'>
                        <h4>45</h4>
                        <p>Mins</p>
                    </div>
                    <div className='deals__countdown__card'>
                        <h4>05</h4>
                        <p>Secs</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DealsSection;