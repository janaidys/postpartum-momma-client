import React from "react";

const Login = () => {
  return (
    <div>
      <span className="limiter">
        <span className="container-login">
          <span className="wrap-login">
            <form className="login-form">
              <span className="login-form-title ">LOGIN</span>

              <span className="wrap-input">
                <input className="input" type="text" name="email" />
                <span className="focus-input"></span>
                <span className="label-input">Email</span>
              </span>

              <span className="wrap-input" data-validate="Password is required">
                <input className="input" type="password" name="pass" />
                <span className="focus-input"></span>
                <span className="label-input">Password</span>
              </span>

              <span>
                <span>
                  <input
                    className="input-checkbox"
                    id="ckb1"
                    type="checkbox"
                    name="remember-me"
                  />
                  <label className="label-checkbox" for="ckb1">
                    Remember me
                  </label>
                </span>

                <span>
                  <a href="#" className="txt1">
                    Forgot Password?
                  </a>
                </span>
              </span>

              <span className="container-login-form-btn">
                <button className="login-form-btn">LOGIN</button>
              </span>

              <span className="sign-up">
                <a href="#" className="txt2">
                  Join our Community!
                </a>
              </span>
            </form>

            <span
              className="login-more"
              style={{backgroundImage: "url('./images/BREASTFEEDING+TWINS.jpg')"}}
            ></span>
          </span>
        </span>
      </span>
    </div>
  );
};

export default Login;
