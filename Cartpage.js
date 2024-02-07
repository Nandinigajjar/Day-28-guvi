import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>Price: {item.price}</div>
            <div>
              Quantity:
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              {item.quantity}
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        Total Quantity: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
      </div>
      <div>
        Total Amount: {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </div>
    </div>
  );
};

export default CartPage;
