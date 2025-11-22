import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePurchase = () => {
    alert("Thank you for your purchase!"); 
    clearCart();
  };

  return (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-card">
                <img src={item.image} alt={item.name} className="cart-img" />
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="cart-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <hr />
          <h3>Total: ${total}</h3>
          <div className="cart-actions">
            <button onClick={clearCart} className="cart-btn">
              Clear Cart
            </button>
            <button onClick={handlePurchase} className="cart-btn confirm-btn">
              Confirm Purchase
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
