import React, { useState } from 'react';
import logo from "../../images/logo.png";
import "./menu.css";
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import { useContext } from 'react';
import { Context } from '../../Context/GamesContext';
const Menu = ({bgColor}) => {
    const {onScrolTop} = useContext(Context)
    const [showSidebar, setShowSidebar] = useState(false);
    const showSidebarMenu = () => { 
        setShowSidebar(true)
    }
  
    
return (
<div className='Menu' style={{backgroundColor: bgColor}}>
    { showSidebar && <SidebarMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />}
    <div className="menu" onClick={showSidebarMenu}>
        <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
       <span>Мени</span>
    </div>
    <div className="logo">
        <div className="logo-img" onClick={onScrolTop}><img src={logo} alt=""/></div>
    </div>
    <p className="header-firstP">Изработено од студентите на академија за програмирање на <a href="https://brainster.co/" className="brainster-link">Brainster</a></p>
    <div className="menu-btn">
    <a href="https://www.brainster.io/business." className="menu-btn1">Обуки за компании</a>
    <a href="https://www.brainster.io/business." className="menu-btn2">Вработи наши студенти</a>
    </div>
</div>
);
}
export default Menu;