import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from '../../components/RatingStars';

const ProductCards = ({ products }) => {
    console.log(products);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                products.map((product, index) => (
                    <div key={index} className='product__card'>
                        <div className='relative'>
                            <Link to={`/shop/product-${product.id * 24688642 / 2}`}>
                                <img src={product.image} alt={product.name} className='max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300' />
                            </Link>

                            <div className='hover:block absolute top-3 right-3'>
                                <button><i className="ri-shopping-cart-2-line bg-red-500 p__2 text-white hover:bg-red-800 cursor-pointer"></i></button>
                            </div>
                        </div>

                        {/* Product Description */}
                        <div className='product__card__content'>
                            <h4>{product.name}</h4>
                            <p>Rs: {product.price} {product.oldPrice ? <s>Rs: {product.oldPrice}</s>: null}</p>
                            <RatingStars rating={product.rating} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ProductCards;