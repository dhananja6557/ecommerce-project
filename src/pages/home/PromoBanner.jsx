import React from 'react';

const PromoBanner = () => {
    return (
        <section className='section__container banner__container'>
            <div className='banner__card'>
                <span className='ri-truck-line'></span>
                <h4>Free Delevery</h4>
                <p>Offers convenience and the ability to shop from anyware, any time</p>
            </div>
            <div className='banner__card'>
                <span className='ri-money-dollar-circle-line'></span>
                <h4>100% Money Back Guaranty</h4>
                <p>E-commerce have a review system where customers can share feedback.</p>
            </div>
            <div className='banner__card'>
                <span className='ri-user-voice-fill'></span>
                <h4>Strong Support</h4>
                <p>Offer customer support services to assist customers with queries and issues.</p>
            </div>
        </section>
    );
}

export default PromoBanner;