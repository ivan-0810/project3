import React from 'react';
import "./SidebarMenu.css";
import logo from "../../images/logo.png";
import {Link} from "react-router-dom"; 
import Login from "../Login/Login"
import { useState } from 'react';


const SidebarMenu = ({setShowSidebar}) => {
        
          const [ modalShow, setModalShow] = useState(false);
    return (
        <div className="sidebar-brightness">
            
            { modalShow ? 
            <Login  modalShow={modalShow} setModalShow = {setModalShow}/> :
            <div className="sidebar">
            <div className="sidebar-logo-closeX">
                <div className="logo">
                    <div className="logo-img"><img src={logo} alt="" /></div>
                </div>
                <div className="closeX" onClick={(e) => setShowSidebar(false)}><i className="fa fa-times 2x"></i> Затвори</div>
            </div>

            <ul>
                <li><Link to={"/form/"} className="yellow-color">Регистрирај се</Link></li>
                <li><button onClick={() => setModalShow(true)} className="yellow-color">Најави се</button></li>
                <li><Link to={"/about/"}className="black-color" style={{color:"black"}}>За нас</Link></li>
                <li><a href="https://brainster.co/photos" className="black-color" style={{color:"black"}}>Галерија</a></li>
                <li><Link to={"/contact/"} className="black-color" style={{color:"black"}}>Контакт</Link></li>
            </ul>
        </div>    
        }
        <div className="brightness">
            <div className="overlay"></div>
        </div>
   
        </div>
    );
}
export default SidebarMenu;