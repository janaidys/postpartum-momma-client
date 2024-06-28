import React from "react";
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import '../Login.css';
import '../mediaQueries.css'

const Login = ({user, setUser}) => {
  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log("This method ran...")
    const body = {
      email:event.target.email.value,
      password: event.target.password.value
    }
  
  fetch(`http://localhost:3000/login/local`, {
        method: "POST",
        body: JSON.stringify(body)
      })
        .then((response) => response.json())
        .then((result) => {console.log(result)
        localStorage.setItem('user'), JSON.stringify(result.data)
        setUser(result.data)})
        .catch((error)=> console.log(error))
        navigate("/admin")
    }
  return (
    <div>
      <span className="limiter">
        <span className="container-login">
          <span className="wrap-login">
            <form className="login-form" onSubmit={handleLoginSubmit}>
              <span className="login-form-title ">LOGIN</span>

              <span className="wrap-input">
                <input className="input" type="text" name="email" />
                <span className="focus-input"></span>
                <span className="label-input">Email</span>
              </span>

              <span className="wrap-input" data-validate="Password is required">
                <input className="input" type="password" name="password" />
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
                  <label className="label-checkbox" htmlFor="ckb1">
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
                <Link to="/signup" className="txt2" >
                  Join our Community!
                </Link>
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
