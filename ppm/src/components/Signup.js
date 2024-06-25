import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'


const Signup = ({user, setUser}) => {
	const navigate = useNavigate();

	const handleSignupSubmit = (event) => {
		event.preventDefault();
		console.log("This method ran...")
		const body = {
		  firstName: event.target.firstName.value,
		  lastName: event.target.lastName.value,
		  email:event.target.email.value,
		  password: event.target.password.value
		}

		fetch(`http://localhost:3000/signup`, {
        method: "POST",
        body: JSON.stringify(body)
      })
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error)=> console.log(error))
		navigate("/login")
	}
    return (
      <div>
        <span className="limiter">
		<span className="container-login">
			<span className="wrap-login">
				<form onSubmit={handleSignupSubmit}className="login-form">
					<span className="login-form-title ">
						SIGN-UP
					</span>
					
					<span className="wrap-input">
						<input className="input" type="text" name="firstName"/>
						<span className="focus-input"></span>
						<span className="label-input">First name</span>
					</span>

                    <span className="wrap-input">
						<input className="input" type="text" name="lastName"/>
						<span className="focus-input"></span>
						<span className="label-input">Last name</span>
					</span>

					<span className="wrap-input">
						<input className="input" type="text" name="email"/>
						<span className="focus-input"></span>
						<span className="label-input">Email</span>
					</span>
					
					
					<span className="wrap-input" data-validate="Password is required">
						<input className="input" type="password" name="password"/>
						<span className="focus-input"></span>
						<span className="label-input">Password</span>
					</span>

					
			

					<span className="container-login-form-btn">
						<button type ="submit" className="login-form-btn">
							SIGN-UP
						</button>
					</span>

				
                    <span className="sign-up">
						<Link to="/login" className="txt2">
							Already a member? Log In
                        </Link>
					</span>

				</form>

				<span className="login-more" style={{backgroundImage: "url('./images/baby-feet.jpg')"}}>
				</span>
			</span>
		</span>
	</span>
      </div>
    )
  }

export default Signup;