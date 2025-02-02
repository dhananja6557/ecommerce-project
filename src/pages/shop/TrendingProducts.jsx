import React, { useState } from 'react';
import ProductCards from './ProductCards';

import products from '../../data/products.json';

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);

    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4);
    }

    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader mb-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit perspiciatis quae ex aut incidunt saepe ab aperiam facere, similique ut corrupti dolore temporibus ipsam enim. Sed odio accusamus sequi.
            </p>

            {/* Product Cards */}
            <div className='mt-12 text-white'>a</div>
            <ProductCards products={products.slice(0, visibleProducts)} />

            {/* Load More Product Button */}
            <div className='product__btn'>
                {
                    visibleProducts < products.length && (
                        <button className='btn btn--primary' onClick={loadMoreProducts}>
                            Load More
                        </button>
                    )
                }
            </div>
        </section>
    );
}

export default TrendingProducts;