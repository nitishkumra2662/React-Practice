import React from 'react'
import { useCartStore } from '../store/useCartStore';


const AddToCartPage = () => {
    const cart = useCartStore(state => state.cart);

    const getTotalAmount = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);

    };

    return (
        <div >
            <h2>Your Cart</h2>

            {
                cart.map((item) => (
                    <div key={item.id} style={{ border: '1px solid gray', margin: '10px 0', padding: '10px' }}>
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                        <div>
                            <h3>{item.title}</h3>
                            <p>Price: Rs{item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Total: Rs{item.price * item.quantity}</p>
                        </div>
                    </div>
                ))
            }

            <h3>Grand Total: Rs{getTotalAmount()}</h3>
        </div>
    );
};

export default AddToCartPage