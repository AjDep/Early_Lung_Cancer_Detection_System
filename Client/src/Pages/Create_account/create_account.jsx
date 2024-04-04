import React from "react";
import girl_with_laptop from "./../../assets/Girl_with_laptop.png";
import style from "./create_account.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { ChartsAxisTooltipContent } from "@mui/x-charts/ChartsTooltip";
import axios from 'axios';

function Create_account() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({ message: '' });

  const navigate =  useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      return;
    }
    if(!validatePassword(password)){
      return;
    }
    if (password !== confirmPassword) {
      setError({ message: 'Password and Confirmed Password do not match' });
      return;
    }


    try {
      const response = await axios.post(
        'http://localhost:5038/signup',  // Ensure the URL is correct and includes the port number
        { email, password }
      );
      setError({message:response.data.message})
      
      if(response.data.message === 'User profile is created successfully'){
        console.log("Line 51 from create_account.jsx");
        navigate('/login');
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

  const validatePassword = (password) => {

    if (password.length < 8) {
      setError({ message: 'Password must be at least 8 characters long' });
      return false;
    }
    if (password.length > 15) {
      setError({ message: 'Password must be less than 15 characters long' });
      return false;
    }
    if (password.search(/\d/) === -1) {
      setError({ message: 'Password must contain at least one number' });
      return false;
    }
    if (password.search(/[!@#$%^&*]/) === -1) {
      setError({ message: 'Password must contain at least one special character' });
      return false;
    }
    if (password.search(/\s/) !== -1) {
      setError({ message: 'Password must not contain any whitespace' });
      return false;
    }
    if (password.search(/[A-Z]/) === -1) {
      setError({ message: 'Password must contain at least one uppercase letter' });
      return false;
    }
    if (password.search(/[a-z]/) === -1) {
      setError({ message: 'Password must contain at least one lowercase letter' });
      return false;
    }

    return true;

  };


    return(
        <div>
      <div className={style.page}>
        <div className={`${style.container} ${style.first}`}>
          {/* Content for the first column */}
          <div className={style.box2}></div>
          <div className={style.box1}>
            <img src={girl_with_laptop} alt="" className={style.girl_with_laptop} />
            <div className={style.innerBox}>
              <p className={style.welcomeMessage}>
                Welcome<span className={style.backText}>Back!</span>
              </p>
            </div>
          </div>
        </div>

        <div className={`${style.container} ${style.second}`}>
          {/* Content for the second column */}
          <div className={style.form}>
            <div className={style.create}>
              <h1>CREATE ACCOUNT</h1>
              <h2>How to I get healthy!</h2>
              <form onSubmit={handleSubmit} >
              <div className={style.input}>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className={style.input1}>
                  <input
                     type="password"
                     placeholder="Enter Password"
                     value={password}
                     onChange={handlePasswordChange}
                     required
                  />
                </div>
                <div className={style.input2}>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                </div>
                {error.message && (
                  <p style={{ color: 'red', textAlign: 'center', marginLeft: '-10px' }}>
                    {error.message}{' '}
                  </p>
                )}
                <div className={style.agreement}>
                    <label>
                      <input type="checkbox" name="agreement" className={style.checkbox} />
                      <span className={style.firstLine}></span>Creating an account means you’re okay with our
                      <br />
                      <span className={style.secondLine}>
                    <span className={style.bold}>Terms of Service</span> 
                    <span className={style.and}> and </span> 
                    <span className={style.bold}>Privacy Policy</span>
                  </span>
                    </label>

                    <div className={style.wordOr}>
                    <div class={style.box3}></div>
                    <div class={style.box4}></div><span class={style.or}>or </span></div>
                    </div>
             
                  <div className={style.login}>
                  <button id={style.createACC}>
                    CREATE ACCOUNT
                  </button>
                  <div className={style.member}>
                    <p>Already a member?
                      <NavLink to={"/login"}>
                        <button><strong className={style.loginHover}>Log In</strong></button>
                      </NavLink>
                    </p>
              </div>
                  </div>
                  {/* <input type="submit" onClick={CreateAccountHandler} value="CREATE MY FREE ACCOUNT" />{" "} */}
                  {/* Login Now button */}
                
                <div className={style.socialLogin}>
                  {/* <div className={style.googleLogin}>
                    <button>
                      LOG IN WITH <strong>APPLE</strong>
                    </button>
                  </div> */}
                </div>
              </form>

              


            </div>
            {/* <div className={style.bottomButtons}>
              <button onClick={style.handleCreateAccount}>Create an Account</button>
            </div> */}
          </div>
        </div>
      </div>
    </div >
    );
}

export default Create_account;