import React, {useState} from 'react';
import RightNav from './RightNav';
import {useNavigate} from "react-router-dom"
import '../index.css';
import '../Header.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Header = ({user, setUser}) => {
  const navigate = useNavigate();
  const [toggleHamburger, setToggleHamburger] = useState(true);
  const ToggleClassName = () => {
    setToggleHamburger(!toggleHamburger);
  };

  const handleLogout = () => {
    fetch(`https://postpartum-momma.onrender.com/api/blog/logout`, {
      method: "GET"
    })
  }
    return (
      <div>
        <header>
            <nav>
        <span className="header-logo">
                <a href="#"><img src="./images/Postpartum Momma Logo.png" className="pm-logo"
            alt="postpartum-momma-logo"/></a>
        </span>
               <RightNav/>
            </nav>
          
            <FontAwesomeIcon icon = {faBars}/>
        </header>
      </div>
    )
  }

export default Header;