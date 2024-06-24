import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'


const Signup = ({user, setUser}) => {
	const navigate = useNavigate();

	const handleSignupSumbit = (event) => {
		event.preventDefault();
		console.log("This method ran...")
		const body = {
		  firstName: event.target.firstName.value,
		  lastName: event.target.lastName.value,
		  email:event.target.email.value,
		  password: event.target.password.value
		}

		fetch(`https://postpartum-momma.onrender.com/api/blog/login/local`, {
        method: "POST",
        body: JSON.stringify
      })
        .then((response) => response.json())
        .then((result) => console.log(result), navigate("/admin"))
        .catch((error)=> console.log(error))
	}
    return (
      <div>
        <span className="limiter">
		<span className="container-login">
			<span className="wrap-login">
				<form className="login-form">
					<span className="login-form-title ">
						SIGN-UP
					</span>
					
					<span className="wrap-input">
						<input className="input" type="text" name="name1"/>
						<span className="focus-input"></span>
						<span className="label-input">First name</span>
					</span>

                    <span className="wrap-input">
						<input className="input" type="text" name="name2"/>
						<span className="focus-input"></span>
						<span className="label-input">Last name</span>
					</span>

					<span className="wrap-input">
						<input className="input" type="text" name="email"/>
						<span className="focus-input"></span>
						<span className="label-input">Email</span>
					</span>
					
					
					<span className="wrap-input" data-validate="Password is required">
						<input className="input" type="password" name="pass"/>
						<span className="focus-input"></span>
						<span className="label-input">Password</span>
					</span>

					
			

					<span className="container-login-form-btn">
						<button className="login-form-btn">
							SIGN-UP
						</button>
					</span>

				
                    <span className="sign-up">
						<Link className="txt2">
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