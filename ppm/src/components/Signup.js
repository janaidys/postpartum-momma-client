import React from 'react';

const Signup = () => {
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
						<a href="#" className="txt2">
							Already a member? Log In
                        </a>
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