import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, addToCart, removeFromCart }) => {
  const totalAmount = cart.reduce(
    (total, product) => total + product.new_price * product.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-msg">Your cart is empty</p>
      ) : (
        <div>
          <div className="cart-items">
            {cart.map((product) => (
              <div className="cart-item" key={product.product_id}>
                <img
                  src={product.image_url}
                  alt={product.product_name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{product.product_name}</h3>
                  <div className="price">
                    <span className="old-price">${product.old_price}</span>
                    <span className="new-price">${product.new_price}</span>
                  </div>
                  <div className="quantity-controls">
                    <button onClick={() => removeFromCart(product.product_id)}>
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button onClick={() => addToCart(product)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ${totalAmount.toFixed(2)}</h2>
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
