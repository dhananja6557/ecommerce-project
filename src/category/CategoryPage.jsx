import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import products from '../data/products.json';
import ProductCards from '../pages/shop/ProductCards';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [filteredProduct, setFilteredProduct] = useState([]);

    useEffect(() => {
        const filtered = products.filter((product) => product.category === categoryName.toLowerCase());
        setFilteredProduct(filtered);
    }, [categoryName]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className='section__container bg__primary__light'>
                <h2 className='section__header capitalize'>{categoryName}</h2>
                <p className='section__subheader'>Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!</p>
            </section>

            {/* Product Cards */}
            <div className='section__container'>
                <ProductCards products={filteredProduct} />
            </div>
        </>
    );
}

export default CategoryPage;