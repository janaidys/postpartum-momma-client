import React from 'react';
import { Link } from 'react-router-dom';
import RightNav from './RightNav';
import { useNavigate } from "react-router-dom";
import '../index.css';
import '../Header.css'


const Header = ({user, setUser}) => {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    fetch(`https://postpartum-momma.onrender.com/api/blog/admin`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setUser({}), localStorage.removeItem("user"), navigate("/"))
      .catch((error)=> navigate("/admin"))
  }
    return (
      <div>
        <header>
            <nav>
        <span className="header-logo">
                <Link><img src="./images/Postpartum Momma Logo.png" className="pm-logo"
            alt="postpartum-momma-logo"/></Link>
        </span>
               <RightNav/>
            </nav>
          
            
        </header>
      </div>
    )
  }

export default Header;