import React from "react";
import "./ProductModal.css";

const ProductModal = ({ product, closeModal, addToCart, proceedToCheckout }) => {
  if (!product) return null;

  const handleAddToCart = (e) => {
    e.stopPropagation();  
    addToCart(product);
  };

  
  const handleBuyNow = (e) => {
    e.stopPropagation();
    addToCart(product);
    proceedToCheckout();  
  };

  return (
    <div className="product-modal-overlay" onClick={closeModal}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>X</button>
        <img src={product.image} alt={product.name} className="modal-image" />
        <div className="modal-details">
          <h2>{product.name}</h2>
          <div className="price">
            <span className="old-price">${product.old_price}</span><br />
            <span className="new-price">${product.new_price}</span>
          </div>
          <p>{product.description}</p>
          <div className="buttons">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
          <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ProductModal;
