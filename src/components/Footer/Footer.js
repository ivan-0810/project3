import React from 'react';
import logo from "../../images/logo.png";
import "./Footer.css";
import { useContext } from 'react';
import { Context } from "../../Context/GamesContext";
import {Link} from "react-router-dom"
const Footer = ({bgColor}) => {
    const {onScrolTop} = useContext(Context)
return (
<div className='footer' style ={{backgroundColor: bgColor}}>
    <div className="footer-menu">
        <Link to={"/about/"} onClick={onScrolTop}>About us</Link>
        <Link to={"/contact/"}>Contact</Link>
        <a href="https://brainster.co/contact">Gallery</a>
    </div>
    <div className="footer-logo">
        <div className="logo-img" onClick={onScrolTop}><img src={logo} alt=""/></div>
    </div>
    <div className="footer-links">
    <div>
        <a href="https://www.twitter.com/"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://www.linkedin.com/"><i className="fab fa-twitter"></i></a>
        <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
    </div>
    </div>
</div>
);
}
export default Footer;