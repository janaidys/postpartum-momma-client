import React from 'react';
import '..';
import "../shared/";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareFacebook, faPintrestSquare, faSquareInstagram} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
      <div>
        <footer>
<span className="row-text-footer" >

<span className="footer-text">
    <h3> CONTACT US</h3>
    
    <a href="mailto:ppmomma@gmail.com"><i className="fa-regular fa-envelope fa-2x"></i></a>

</span>
<br/>

<span className="footer-text">
    <h3>FOLLOW US</h3>
        <span className="icons">
       
        <a href="#"> <FontAwesomeIcon icon = {faSquareFacebook}/></a>
        {/* </><i className="fa-brands fa-square-facebook fa-2x"></i> */}
        
        <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-pinterest" /></a>
        
       
        <a href="#"><FontAwesomeIcon icon="fa-brands fa-square-instagram" /></a>
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