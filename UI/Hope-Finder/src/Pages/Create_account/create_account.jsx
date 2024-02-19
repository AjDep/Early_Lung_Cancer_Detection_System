import React from "react";
import girl_with_laptop from "./../../assets/Girl_with_laptop.png";
import style from "./create_account.module.css";


function Create_account(){
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
              <form>
              <div className={style.input}>
                  <input
                    type="text"
                    placeholder="Username"
                    name="uname"
                    required
                  />
                </div>
                <div className={style.input1}>
                  <input
                    type="password"
                    placeholder="Password"
                    name="pass"
                    required
                  />
                </div>
                <div className={style.input2}>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="pass"
                    required
                  />
                </div>
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
  <div class={style.box4}></div><span class={style.or}>or </span>
</div>
</div>
                <div className={style.button}>
                  <input type="submit" value="CREATE MY FREE ACCOUNT" />{" "}
                  {/* Login Now button */}
                </div>
                <div className={style.socialLogin}>
                  <div className={style.googleLogin}>
                    <button>
                      LOG IN WITH <strong>APPLE</strong>
                    </button>
                  </div>
                  <div className={style.member}>
                    <p>Already a member? <strong>Log In</strong></p>
                  </div>
                </div>
              </form>
            </div>
            <div className={style.bottomButtons}>
              <button onClick={style.handleCreateAccount}>Create an Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Create_account;