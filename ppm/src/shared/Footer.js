import React from 'react';
import '../index.css';
import '../Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareFacebook, faPinterestSquare, faSquareInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";





const Footer = () => {
    return (
      <div>
        <footer>
<span className="row-text-footer">

<span className="footer-text">
    <h3> CONTACT US</h3>
    
    <a href="mailto:ppmomma@gmail.com"><FontAwesomeIcon icon = {faEnvelope}/></a>

</span>
<br/>

<span className="footer-text">
    <h3>FOLLOW US</h3>
        <span className="icons">
       
        <a href="#"> <FontAwesomeIcon icon = {faSquareFacebook}/></a>
    
        
        <a href="#"><FontAwesomeIcon icon={faPinterestSquare}/></a>
        
       
        <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
    </span>
</span>
<br/>


<span className=" footer-logo">
    <a target="_blank" rel="noopener noreferrer" href="#"><img src="./images/pm-footer-logo.png" alt="pm-footer-logo" className="postpartum-momma-footer-logo"/></a>
</span>


<span className=" footer-quote">
    <h4>"Empowering Motherhood Journeys"</h4>
</span>

</span>
</footer>  
      </div>
    )
  }

export default Footer;