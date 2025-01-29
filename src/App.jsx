import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./pages/Home";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const addToCart = (product) => {
    if (!user) {
      alert("Please login to add items to your cart.");
      return;
    }
  
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.product_id === product.product_id);
  
      if (existingProduct) {
        // If the product already exists in the cart, just increase the quantity
        return prevCart.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the product doesn't exist in the cart, add it with a quantity of 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  
    setCartCount((prevCount) => prevCount + 1);  // Increase cart count
  };
  
  
  const removeFromCart = (productId) => {
    if (!user) {
      alert("Please login to manage your cart.");
      return;
    }
  
    setCart((prevCart) => {
      // Decrease quantity of the product in the cart
      const updatedCart = prevCart.map((item) =>
        item.product_id === productId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      ).filter((item) => item.quantity > 0); // Remove product if quantity is 0
  
      // Update cart count based on the updated cart
      setCartCount(updatedCart.reduce((count, item) => count + item.quantity, 0)); // Sum quantities of all items
  
      return updatedCart;
    });
  };
    

  const handleLogin = (userData, token) => {
    setUser(userData);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar cartCount={cartCount} user={user} onLogout={handleLogout} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/products" element={<Products addToCart={addToCart}/>} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart}/>} />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
