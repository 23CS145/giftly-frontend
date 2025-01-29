import React, { useState } from 'react';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

const Home = ({user}) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="home-container">
      <h1>Welcome to Gifty!</h1>
      {user ? (<>
        <h2>Gifts !!! </h2>
        <p>A Special Way To Show Love To Your Special Ones</p>
        </>
      ) : (
        <>
          <div>
            <button onClick={() => setShowLogin(true)}>Login</button>
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
          </div>

          {showLogin ? <Login /> : <Signup />}
        </>
      )}
    </div>
  );
};

export default Home;