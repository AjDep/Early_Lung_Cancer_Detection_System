import React from "react";
import girl_with_laptop from "./../../assets/Girl_with_laptop.png";
import style from "./sign.module.css";
import { useState } from "react";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

function Sign() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ message: '' });
  const navigate =  useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // sign-in logic
    if (!validateEmail(email)) {
      return;
    }

    try {
      console.log("Line 29",email,password);
      const response = await axios.post(
        'http://localhost:5038/login',  // Ensure the URL is correct and includes the port number
        { email, password }
      );
      setError({message:response.data.message})
      
      if(response.data.message === 'User profile is authenticated successfully'){
        localStorage.setItem('token',response.data.token);
        console.log("Line 36 from create_account.jsx");
        navigate('/dashboard');
      }
      // If you need to navigate to another route upon successful account creation, you can do it here
    } catch (error) {
      console.error('Error:', error);
      setError({ message: error.response?.data?.message || 'An error occurred' });
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setError({ message: 'Invalid email' });
      return false;
    } else {
      setError({ message: '' });
      return true;
    }
  };

  return (
    <div>
      <div className={style.page}>
        <div className={`${style.container} ${style.first}`}>
          <div className={style.form}>
            <div className={style.login}>
              <h1>LOGIN</h1>
              <h2>Stay Updated on Your Healthy World!</h2>
              <div className={style.inputs}>
              <form onSubmit={handleSubmit}>
                <div className={style.input}>
                  <input 
                    type="text"
                    placeholder="Email or phone"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className={style.input}>
                  <input 
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                
                {error.message && (
                  <p style={{ color: 'red', textAlign: 'center', marginLeft: '-10px' }}>
                    {error.message}{' '}
                  </p>
                )}
                {/* <div className={style.forgot}>
                  <p>Forgot Password?</p>
                </div> */}
                <div className={style.button}>
                  <button type="submit">Login Now</button>
                </div>
              </form>
              </div>
              {/* <div className={style.socialLogin}>
                <div className={style.googleLogin}>
                  <button>
                    Login with <strong>Google</strong>
                  </button>
                </div>
                <div className={style.facebookLogin}>
                  <button>
                    Login with <strong>Facebook</strong>
                  </button>
                </div>
              </div> */}

            </div>
          </div>
          <div className={style.bottomButtons}>
            <button onClick={style.handleCreateAccount}>
              Create an Account
            </button>
          </div>
        </div>

        <div className={style.box2}></div>
        <div className={style.box1}>
          <img
            src={girl_with_laptop}
            alt=""
            className={style.girl_with_laptop}
          />
          <div className={style.innerBox}>
            <p className={style.welcomeMessage}>
              Hello<span className={style.backText}>Back!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sign;
