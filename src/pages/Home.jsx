import React, { useState } from 'react';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

const Home = ({ onLogin, user }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="home-container">
      <h1>Welcome to Gifty!</h1>
      {user ? (
        <h2>Hello, {user.email}</h2>
      ) : (
        <>
          <div>
            <button onClick={() => setShowLogin(true)}>Login</button>
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
          </div>

          {showLogin ? <Login onLogin={onLogin} /> : <Signup onSignup={() => alert("Signup feature not implemented yet.")} />}
        </>
      )}
    </div>
  );
};

export default Home;
