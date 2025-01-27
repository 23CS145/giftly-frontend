import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = ({ cart }) => {
  const [shippingAddress, setShippingAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errors, setErrors] = useState({});

  const totalAmount = cart.reduce((total, item) => total + item.new_price * item.quantity, 0);

  const validateForm = () => {
    let formErrors = {};
    let errorMessages = [];

    if (!shippingAddress.trim()) {
      formErrors.shippingAddress = "Shipping address is required.";
      errorMessages.push("Shipping address is required.");
    }
    if (!phoneNumber.trim() || !/^\d{10}$/.test(phoneNumber)) {
      formErrors.phoneNumber = "Valid phone number is required (10 digits).";
      errorMessages.push("Valid phone number is required (10 digits).");
    }
    if ((paymentMethod === "creditCard" || paymentMethod === "paypal") && !paymentInfo.trim()) {
      formErrors.paymentInfo = "Payment information is required.";
      errorMessages.push("Payment information is required.");
    }
    if (!paymentMethod) {
      formErrors.paymentMethod = "Please select a payment method.";
      errorMessages.push("Please select a payment method.");
    }

    setErrors(formErrors);

    if (errorMessages.length > 0) {
      alert(errorMessages.join("\n"));
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Checkout Details: ", {
        shippingAddress,
        phoneNumber,
        paymentMethod,
        paymentInfo,
        cart,
      });

      // alert("Checkout successful!");
      window.location.href = "/order-confirmation";
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="shipping-address">Shipping Address</label>
          <input
            id="shipping-address"
            type="text"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            placeholder="Enter your shipping address"
          />
        </div>

        <div className="input-group">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            id="phone-number"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>

        <div className="input-group">
          <label>Payment Method</label>
          <div className="payment-method-options">
            <label>
              <input
                type="radio"
                name="payment-method"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="payment-method"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              PayPal
            </label>
            <label>
              <input
                type="radio"
                name="payment-method"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>
          </div>
        </div>

        {(paymentMethod === "creditCard" || paymentMethod === "paypal") && (
          <div className="input-group">
            <label htmlFor="payment-info">Payment Information</label>
            <input
              id="payment-info"
              type="text"
              value={paymentInfo}
              onChange={(e) => setPaymentInfo(e.target.value)}
              placeholder={
                paymentMethod === "creditCard"
                  ? "Enter your credit card number"
                  : "Enter your PayPal email"
              }
            />
          </div>
        )}

        <div className="order-summary">
          <h3 className="summary-heading">Order Summary</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} - ${item.new_price * item.quantity}
              </li>
            ))}
          </ul>
          <div className="total">Total: ${totalAmount.toFixed(2)}</div>
        </div>

        <button type="submit">Complete Checkout</button>
      </form>

      <div className="back-to-cart">
        <Link to="/cart">Back to Cart</Link>
      </div>
    </div>
  );
};

export default Checkout;
