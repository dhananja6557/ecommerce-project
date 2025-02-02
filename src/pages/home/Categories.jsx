import React from 'react';

import catImage1 from '../../assets/category-1.jpg';
import catImage2 from '../../assets/category-2.jpg';
import catImage3 from '../../assets/category-3.jpg';
import catImage4 from '../../assets/category-4.jpg';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = [
        { name: 'Accessories', path: 'accessories', image: catImage1 },
        { name: 'Dress Collection', path: 'dress', image: catImage2 },
        { name: 'Jewellery', path: 'jewellery', image: catImage3 },
        { name: 'Cosmetics', path: 'cosmetics', image: catImage4 },
    ];

    return (
        <>
            <div className='product__grid'>
                {categories.map((category) => (
                    <Link to={`/categories/${category.path}`} className='categories__card' key={category.name}>
                        <img src={category.image} alt={category.name} />
                        <h4>{category.name}</h4>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Categories