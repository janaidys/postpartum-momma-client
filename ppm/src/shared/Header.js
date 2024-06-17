import React from 'react';

const Header = () => {
    return (
      <div>
        <header>
            <nav>
        <span className="header-logo">
                <a href="#"><img src="./images/Postpartum Momma Logo.png" className="pm-logo"
            alt="postpartum-momma-logo"/></a>
        </span>

            
            <a className= "login" href="#">LOGIN/SIGN UP</a>
    
                <ul>

                    
                    <li className=" nav-list"><a href="#">HOME</a></li>

            
                    <li className=" nav-list"><a href="#">ABOUT US </a></li>

                </ul>
            </nav>
          
            <i className="fa-solid fa-bars"></i>
        </header>
      </div>
    )
  }

export default Header;