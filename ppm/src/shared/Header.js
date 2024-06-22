import React from 'react';
import "";
import "";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
      <div>
        <header>
            <nav>
        <span className="header-logo">
                <a href="#"><img src="./images/Postpartum Momma Logo.png" className="pm-logo"
            alt="postpartum-momma-logo"/></a>
        </span>

    
                <ul>
                    <li className=" nav-list"><a href="#">HOME</a></li>

            
                    <li className=" nav-list"><a href="#">ABOUT US </a></li>

                    <li className ="nav-list"><a href="#">LOGIN</a></li>

                    <li className ="nav-list"><a href="#">SIGN UP</a></li>

                </ul>
            </nav>
          
            <i className="fa-solid fa-bars"></i>
        </header>
      </div>
    )
  }

export default Header;