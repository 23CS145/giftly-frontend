import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./pages/Home";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  

  // const addToCart = (product) => {
  //   console.log("Adding to cart:", product);
  //   setCart((prevCart) => {
  //     const existingProduct = prevCart.find((item) => item.id === product.id);
  //     if (existingProduct) {
  //       return prevCart.map((item) =>
  //         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //       );
  //     } else {
  //       return [...prevCart, { ...product, quantity: 1 }];
  //     }
  //   });
  //   setCartCount((prevCount) => prevCount + 1);
  // };
  
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setCartCount((prevCount) => prevCount + 1);
  };
  

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ).filter((item) => item.quantity > 0);

      return updatedCart;
    });
    setCartCount((prevCount) => Math.max(prevCount - 1, 0));
  };


  const handleLogin = (userData) => {
    if (userData.email === "user@example.com" && userData.password === "password123") {
      setUser({ email: userData.email });
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar cartCount={cartCount} user={user} onLogout={handleLogout} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home onLogin={handleLogin} user={user} />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
  
};

export default App;
