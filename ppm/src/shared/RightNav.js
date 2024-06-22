import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const RightNav = () => {
    return (
      <div>
    
                <ul>
                    <li className=" nav-list"><a href="#">HOME</a></li>

            
                    <li className=" nav-list"><a href="#">ABOUT US </a></li>

                    <li className ="nav-list"><a href="#">LOGIN</a></li>

                    <li className ="nav-list"><a href="#">SIGN UP</a></li>

                </ul>
           
          
            <FontAwesomeIcon icon = {faBars}/>
        
      </div>
    )
  }

export default RightNav;