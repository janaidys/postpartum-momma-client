import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import '../index.css';
import '../Header.css';
import '../mediaQueries.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const RightNav = () => {
  const [open, setOpen] = useState(true);
  
    return (
      <div>
            <span className="menu-trigger" onClick={() => {setOpen(!open)}}>
            <FontAwesomeIcon icon = {faBars}/>
            </span>

            <span className={`dropdown-menu ${open? 'active': 'inactive'}`}>
                <ul>
                  
                    <li className=" nav-list"><Link to="/">HOME</Link></li>
            
                    <li className=" nav-list"><Link to="/about">ABOUT US</Link></li>
                  <span>
                    
                    <li className ="nav-list"><Link to="/login">LOGIN/SIGNUP</Link></li>
                  </span>

                    <li className ="nav-list"><button className="login-form-btn">LOGOUT</button></li>

                </ul>
                </span>
           
          
            
        
      </div>
    )
  }

export default RightNav;