import React from 'react';
import { Link, useParams } from 'react-router-dom';
import RatingStars from '../../../components/RatingStars';

import products from '../../../data/products.json';

const SingleProduct = () => {
    const { id } = useParams();    

    // Product by id
    let pm_id = id.replace("product-", "") / 24688642 * 2;
    const product = products.filter(item => item.id === pm_id)[0];

    return (
        <>
            <section className='section__container bg__primary__light'>
                <h2 className='section__header capitalize'>{product.name} Details</h2>
                <div className='section__subheader space-x-2'>
                    <span className='hover:text-red-500'><Link to="/">Home</Link></span>
                    <i className="ri-arrow-right-s-line"></i>
                    <span className='hover:text-red-500'><Link to="/shop">Shop</Link></span>
                    <i className="ri-arrow-right-s-line"></i>
                    <span className='hover:text-red-500'>Shop</span>
                </div>
            </section>

            <section className='section__container mt-8'>
                <div className='flex flex-col items-center md:flex-row gap-8'>
                    {/* Product image */}
                    <div className='md:w-1/2 w-full'>
                        <img src={product.image} alt={product.name} className='rounded-md w-full h-auto' />
                    </div>

                    <div className='md:w-1/2 w-full'>
                        <h3 className='text-2xl font-semibold mb__1'>{product.name}</h3>
                        <p className='text-xl text-red-500 mb__1'>Rs: {product.price} {product.oldPrice ? <s>Rs: {product.oldPrice}</s>: null}</p>
                        <p className='text-gray-400 mb__1'>{product.description}</p>

                        {/* Addistional product info */}
                        <div>
                            <p className='capitalize'><strong>Category: </strong>{product.category}</p>
                            <p className='capitalize'><strong>Color: </strong>{product.color}</p>
                            <div className='flex items-center gap-1'>
                                <strong>Rating: </strong>
                                <RatingStars rating={product.rating} />
                            </div>
                        </div>

                        <button className='mt__2 px__4 py__1 bg__primary text-white rounded-md cursor-pointer hover:bg-red-800'>
                            Add to cart
                        </button>
                    </div>
                </div>
            </section>

            {/* Display reviews */}
            <section className='section__container mt-8'>
                Reviews Here
            </section>
        </>
    )
}

export default SingleProduct;