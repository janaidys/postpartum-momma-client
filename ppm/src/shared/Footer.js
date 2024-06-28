import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import '../Footer.css';
import '../mediaQueries.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareFacebook, faPinterestSquare, faSquareInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
      <div>
        <footer>
<div className="row-text-footer">

<div className="footer-row">
<span className="footer-text">
    <h3> CONTACT US</h3>
    
    <a href="mailto:ppmomma@gmail.com"><FontAwesomeIcon icon = {faEnvelope}/></a>

</span>
<br/>
<span className="footer-text">
    <h3>FOLLOW US</h3>
        <span className="icons">
       
        <a href="#"> <FontAwesomeIcon className= "icons" icon = {faSquareFacebook}/></a>
    
        
        <a href="#"><FontAwesomeIcon className="icons" icon={faPinterestSquare}/></a>
        
       
        <a href="#"><FontAwesomeIcon className="icons" icon={faSquareInstagram} /></a>
    </span>
</span>
<br/>


<span className=" footer-logo">
    <Link to="/"><img src="./images/pm-footer-logo.png" alt="pm-footer-logo" className="postpartum-momma-footer-logo"/></Link>
</span>
</div>

<br/>

<div className="footer-quote">
    <h4>"Empowering Motherhood Journeys"</h4>
</div>

</div>
</footer>  
      </div>
    )
  }

export default Footer;