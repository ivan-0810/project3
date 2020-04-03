import React from 'react';
import "./Contact.css"
import { Link } from "react-router-dom";
const Contact = (props) => {
    return (
        <div className='contact' style={{
            backgroundImage: "url(" + require("../../images/city.jpg") + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",

        }}>
            <div className="overlay-contact">
                <Link to={"/"}className="goback-btn"><span><i className="fas fa-arrow-left"></i></span> go back</Link>
                <h1>Contact Us</h1>
                <div className="inside-contact">
                    <span><i className="fas fa-envelope pliko"></i></span>
                    <div className="contact-info">
                        <div>
                            <span><i className="fas fa-map-marker-alt"></i></span>
                           <p>andon surkov 25 1/1 1400 veles, Macedonia</p>
                        </div>
                        <div>
                        <span><i className="fas fa-phone-alt"></i></span>
                             <p>00 389 78 469 434</p>
                        </div>

                        <div>
                            <span><i className="fas fa-user-friends"></i></span>

                            <p>ivan ivanov</p>
                        </div>
                        <div>
                            <span><i className="fas fa-envelope"></i></span>
                            <span>ivanveles2003@yahoo.com</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
export default Contact;