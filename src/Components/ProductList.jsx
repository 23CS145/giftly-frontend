import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard.jsx";
import ProductModal from "./ProductModal.jsx";
import "./ProductList.css";

const ProductList = ({ addToCart }) => {
  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://giftly-backend.onrender.com/api/products");
        setProducts(response.data); // Set the products data
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Failed to load products");
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);
  

  const filteredProducts = filter === "All"
    ? products
    : products.filter((product) => product.category === filter);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

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
            <ProductCard product={product} key={product.product_id} addToCart={addToCart} onProductClick={handleProductClick} />
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
      <ProductModal product={selectedProduct} closeModal={closeModal} addToCart={addToCart} />
    </div>
  );
};

export default ProductList;
