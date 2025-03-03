import React from 'react';

const CartModal = ({ products, isOpen, onClose }) => {
    console.log(products);
    
    return (
        <div
            className={`fixed z-[1000] inset-0 transition-opacity ${
                isOpen ? "bg-[rgba(0,0,0,0.5)] opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{ transition: "opacity 300ms ease-in-out" }}
        >
            <div 
                className={`fixed right-0 top-0 md:w-1/3 w-full bg-white h-full overflow-y-auto transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.94)'}}
            >
                <div className='p__3 mt__2'>
                    <div className='flex items-center justify-between mb__2'>
                        <h1 className='text-xl font-semibold'>Cart List</h1>
                        <button className='text-gray-600 cursor-pointer hover:text-gray-900' onClick={() => onClose()}><i className="text-white bg-black hover:bg-red-500 ri-xrp-fill p__1"></i></button>
                    </div>

                    <div>
                        {
                            products.length === 0 ? (<div>Your cart is empty</div>) : (
                                products.map((item, index) => (
                                    <div key={index} className='flex flex-col shadow-md md:flex-row md:items-center md:justify-between md:p__3 p__1 mb__2'>
                                        <div className='flex items-center'>
                                            <span className='text-white bg-red-500 rounded-full mr__1 px__0'>0{index + 1}</span>
                                            <img src={item.image} alt={item.name} className='object-cover size-12 mr__2' />
                                            <h5 className='text-lg font-medium'>{item.name}</h5>
                                            <p className='text-sm text-gray-600'>Rs: {Number(item.price).toFixed(2)}</p>
                                        </div>

                                        <div className='flex flex-row items-center justify-end md:justify-start mt__1'>
                                            <button className='flex items-center text-gray-700 bg-gray-200 rounded-full ml__3 size-6 px__1 hover:bg-red-500 hover:text-white'>-</button>
                                            <span className='text-center px__1 mx__0'>{item.quantity}</span>
                                            <button className='flex items-center text-gray-700 bg-gray-200 rounded-full size-6 px__1 hover:bg-red-500 hover:text-white'>+</button>
                                        </div>

                                        <div className='ml_2'>
                                            <button
                                                className='text-red-500 hover:text-red-800'
                                            >Remove</button>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartModal;
