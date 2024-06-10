import React from 'react';

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
       
        <a href="#"> <i className="fa-brands fa-square-facebook fa-2x"></i></a>
        
      
        <a href="#"><i className="fa fa-pinterest-square fa-2x" aria-hidden="true"></i></a>
        
       
        <a href="#"><i className="fa-brands fa-square-instagram fa-2x"></i></a>
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