import React from 'react';
// import RightNav from './shared/RightNav';
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
               {/* <RightNav/> */}
            </nav>
          
            <FontAwesomeIcon icon = {faBars}/>
        </header>
      </div>
    )
  }

export default Header;