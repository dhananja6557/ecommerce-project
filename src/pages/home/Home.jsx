import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import HeroSection from './HeroSection';
import TrendingProducts from '../shop/TrendingProducts';

const Home = () => {
    return (
        <>
            <Banner />
            <Categories />
            <HeroSection />
            <TrendingProducts />
        </>
    );
}

export default Home;