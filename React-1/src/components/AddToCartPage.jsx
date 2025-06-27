import React from "react";
import { useCartStore } from "../store/useCartStore";

const AddToCartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <div>
            <h3>{item.title}</h3>
            <p>Price: Rs{item.price}</p>
            <p>
              Quantity:{" "}
              <button
                onClick={() => decreaseQuantity(item.id)}
                disabled={item.quantity == 1}
              >
                -
              </button>
              {item.quantity}
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              Total: Rs{item.price * item.quantity}
            </p>

            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <h3>Grand Total: Rs{getTotalAmount()}</h3>
    </div>
  );
};

export default AddToCartPage;
