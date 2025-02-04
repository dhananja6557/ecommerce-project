import React, { useEffect, useState } from 'react';

import productData from '../../data/products.json';
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';

const filters = {
    categories: ['all', 'jewellery', 'cosmetics', 'dress', 'accessories'],
    colors: ['all', 'red', 'blue', 'gold', 'silver', 'black', 'white', 'green', 'yellow', 'pink'],
    price: [
        { label: 'Under Rs: 100', min: 0, max: 100 },
        { label: 'Rs: 100 - Rs: 1000', min: 100, max: 1000 },
        { label: 'Rs: 1000 - Rs: 5000', min: 1000, max: 5000 },
        { label: 'Rs: 5000 and above', min: 5000, max: Infinity },
    ],
}

const ShopPage = () => {
    const [products, setProducts] = useState(productData);
    const [filtersState, setFiltersState] = useState({
        category: 'all',
        color: 'all',
        price: '',
    });

    // Filtering Functions
    const applyFilter = () => {
        let filteredProducts = productData;

        // Filter by category
        if (filtersState.category && filtersState.category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === filtersState.category);
        }

        // Filter by color
        if (filtersState.color && filtersState.color !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.color === filtersState.color);
        }

        // Filter by price
        if (filtersState.price) {
            const [min, max] = filtersState.price.split('-').map(Number);
            filteredProducts = filteredProducts.filter(product => product.price >= min && product.price <= max);
        }

        setProducts(filteredProducts);
    }

    useEffect(() => {
        applyFilter();
    }, [filtersState]);

    // Clear Filters
    const clearFilters = () => {
        setFiltersState({
            category: 'all',
            color: 'all',
            price: '',
        });
    }

    return (
        <>
            <section className='section__container bg__primary__light'>
                <h2 className='section__header capitalize'>Shop Page</h2>
                <p className='section__subheader'>Discover the hottest pics: Elevate your style with our curated collection of trending women's fashion products!</p>
            </section>

            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
                    {/* Left Side */}
                    <ShopFiltering
                        filters={filters}
                        filtersState={filtersState}
                        setFiltersState={setFiltersState}
                        clearFilters={clearFilters}
                    />

                    {/* Right Side */}
                    <div>
                        <h3 className='text-xl font-medium mb__0'>Products Available: {products.length}</h3>
                        <ProductCards products={products} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default ShopPage;