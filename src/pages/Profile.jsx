import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [orders, setOrders] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ address: '', phone: '' });

  useEffect(() => {
    fetch('/api/user/profile')
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data);
        setFormData({ address: data.address || '', phone: data.phone || '' });
      });

    fetch('/api/user/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    fetch('/api/user/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data);
        setIsEditing(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="profile-container">
      <h2 className="profile-header">Your Profile</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        {!isEditing ? (
          <>
            <p><strong>Address:</strong> {userDetails.address || 'N/A'}</p>
            <p><strong>Phone:</strong> {userDetails.phone || 'N/A'}</p>
            <button className="profile-button edit-button" onClick={handleEdit}>
              Edit
            </button>
          </>
        ) : (
          <>
            <div className="input-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <button className="profile-button save-button" onClick={handleSave}>
              Save
            </button>
          </>
        )}
      </div>

      <h3 className="orders-header">Your Orders</h3>
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <img src={order.image} alt={order.name} className="order-image" />
            <div className="order-details">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Items:</strong> {order.items.join(', ')}</p>
            </div>
            <div className="order-actions">
              <button className="order-button buy-again-button">
                Buy Again
              </button>
              <button className="order-button view-details-button">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
