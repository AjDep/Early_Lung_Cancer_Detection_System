import React from "react";
import girl_with_laptop from "./../../assets/Girl_with_laptop.png";
import style from "./sign.module.css";

function Sign() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // sign-in logic
  };
  return (
    <div>
      <div className={style.page}>
        <div className={`${style.container} ${style.first}`}>
          <div className={style.form}>
            <div className={style.login}>
              <h1>LOGIN</h1>
              <h2>Stay Updated on Your Healthy World!</h2>
              <form>
                <div className={style.input}>
                  <input
                    type="text"
                    placeholder="Email or Phone"
                    name="uname"
                    required
                  />
                </div>
                <div className={style.input}>
                  <input
                    type="password"
                    placeholder="Password"
                    name="pass"
                    required
                  />
                </div>
                <div className={style.forgot}>
                  <p>Forgot Password?</p>
                </div>
                <div className={style.button}>
                  <input type="submit" value="Login Now" />{" "}
                  {/* Login Now button */}
                </div>
                <div className={style.socialLogin}>
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
                </div>
              </form>
            </div>
          </div>
          <div className={style.bottomButtons}>
            <button onClick={style.handleCreateAccount}>Create an Account</button>
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
              Welcome<span className={style.backText}>Back!</span>
            </p>
            
          
        </div>
      </div>
      </div>
    </div>
  );
}
export default Sign;
