import React from 'react';
import { Link } from 'react-router-dom';
import RightNav from './RightNav';
import '../index.css';
import '../Header.css'
import '../mediaQueries.css'


const Header = () => {

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