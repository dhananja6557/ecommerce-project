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
            CartModal
        </div>
    )
}

export default CartModal;