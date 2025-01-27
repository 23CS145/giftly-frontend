import React, { useState } from "react";
import ProductCard from "./ProductCard.jsx";
import ProductModal from "./ProductModal.jsx";
import allProducts from "../assets/all_product";
import "./ProductList.css";

const ProductList = ({ addToCart }) => {
  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = filter === "All"
    ? allProducts
    : allProducts.filter((product) => product.Category === filter);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-list-container">
      <h1>Our Gifts Collection</h1>
      <div className="filters">
        <button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>All</button>
        <button className={filter === "Anniversary" ? "active" : ""} onClick={() => setFilter("Anniversary")}>Anniversary</button>
        <button className={filter === "Birthday" ? "active" : ""} onClick={() => setFilter("Birthday")}>Birthday</button>
        <button className={filter === "Wedding" ? "active" : ""} onClick={() => setFilter("Wedding")}>Wedding</button>
        <button className={filter === "Festive" ? "active" : ""} onClick={() => setFilter("Festive")}>Festive</button>
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} addToCart={addToCart} onProductClick={handleProductClick} />
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>

      <ProductModal product={selectedProduct} closeModal={closeModal} />
    </div>
  );
};

export default ProductList;
