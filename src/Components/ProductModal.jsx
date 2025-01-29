import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductModal.css";

const ProductModal = ({ product, closeModal, addToCart }) => {
  const navigate = useNavigate();
  if (!product) return null;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    handleAddToCart(e);

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...storedCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    navigate("/cart");
  };

  return (
    <div className="product-modal-overlay" onClick={closeModal}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>X</button>
        <img src={product.image_url} alt={product.product_name} className="modal-image" />
        <div className="modal-details">
          <h2>{product.product_name}</h2>
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
