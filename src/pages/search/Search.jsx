import React from 'react';
import { useState } from 'react';

import products from '../../data/products.json';
import ProductCards from '../shop/ProductCards';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = () => {
        const query = searchQuery.toLowerCase();

        const filtered = products.filter(product => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query));
        setFilteredProducts(filtered);
    }

    return (
        <>
            <section className='section__container bg__primary__light'>
                <h2 className='section__header capitalize'>Search Products</h2>
                <p className='section__subheader'>Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!</p>
            </section>
            <section className='section__container'>
                <div className='w-full mb__12 flex flex-col md:flex-row justify-center items-center gap-4'>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='search-bar w-full max-w-4xl p__1 border rounded'
                        placeholder='Search for products...'
                    />
                    <button
                        className='search-button w-full md:w-auto p__1 bg-red-500 text-white rounded'
                        onClick={handleSearch}
                    >Search</button>
                </div>

                <ProductCards products={filteredProducts} />
            </section>
        </>
    );
}

export default Search;