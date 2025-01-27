import React from "react";
import ProductList from "../Components/ProductList";

const Products = ({ addToCart }) => (
  <div className="products">
    <ProductList addToCart={addToCart} />
  </div>
);

export default Products;
