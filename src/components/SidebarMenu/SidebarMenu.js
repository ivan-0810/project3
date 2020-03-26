import React from 'react';
import "./SidebarMenu.css";
import logo from "../../images/logo.png";
import { useContext } from 'react';
import { Context } from "../../Context/GamesContext";

const SidebarMenu = ({setShowSidebar}) => {
   
    const { forma, setForma } = useContext(Context);
    return (
        <div className="sidebar-brightness">
         
                     <div className="sidebar">
            <div className="sidebar-logo-closeX">
                <div className="logo">
                    <div className="logo-img"><img src={logo} alt="" /></div>
                </div>
                <div className="closeX" onClick={(e) => setShowSidebar(false)}><i className="fa fa-times 2x"></i> Затвори</div>
            </div>

            <ul>
                <li><button onClick={()=> setForma(!forma)} className="yellow-color">Регистрирај се</button></li>
                <li><button onClick={()=> setForma(!forma)} className="yellow-color">Најави се</button></li>
                <li><a href="https://brainster.co/about" className="black-color" style={{color:"black"}}>За нас</a></li>
                <li><a href="https://brainster.co/photos" className="black-color" style={{color:"black"}}>Галерија</a></li>
                <li><a href="https://brainster.co/contact" className="black-color" style={{color:"black"}}>Контакт</a></li>
            </ul>
        </div>
        <div className="brightness">
            <div className="overlay"></div>
        </div>
   
        </div>
    );
}
export default SidebarMenu;