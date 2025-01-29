import React from "react";
import "./ProductCard.css";
const ProductCard = ({ product, addToCart, onProductClick }) => {
  return (
    <div className="product-card" onClick={() => onProductClick(product)}>
      <img src={product.image_url} alt={product.product_name} />
      <h3>{product.product_name}</h3>
      <div className="price">
        <span className="old-price">${product.old_price}</span>
        <span className="new-price">${product.new_price}</span>
      </div>
      <button className="add-to-cart" onClick={(e) => {
        e.stopPropagation();
        addToCart(product);
      }}>Add to Cart</button>
    </div>
  ); 
};
export default ProductCard;