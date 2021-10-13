import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
import '../Shipping/Shipping.css'
import { BsGoogle } from "react-icons/bs";
const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/shop";
  
  const handleGoogleLogin = () => {
    signInUsingGoogle()
    .then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="login-form">
      <div>
        
        <form className='shipping-form'>
        <h2>Login</h2>
          <input type="email" placeholder="enter your email address" />
          <br />
          <input type="password" placeholder="enter your password" />
          <br />
          <input className='btn-regular' type="submit" value="Submit" />
          <p>
          new to ema-john? <Link to="/register">Create Account</Link>
        </p>
        </form>
        <div>----------or-----------</div>
        <button onClick={handleGoogleLogin} className="btn-regular"><BsGoogle/> Google Sing In
        </button>
        
      </div>
    </div>
  );
};

export default Login;
