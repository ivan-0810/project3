import React, { Fragment } from 'react';
import Header from "./Header/Header";
import "./MainCont.css";
import GamesList from './GamesList/GamesList';
import Filters from '../Filters/Filters';
import Menu from "../Menu/Menu";
import Footer from '../Footer/Footer';
import Forma from '../SidebarMenu/Forma';
import { useContext } from 'react';
import { Context } from '../../Context/GamesContext';

const MainCont = () => {
    const { forma } = useContext(Context);
return (
    <div className="Box">
        {forma ? <Forma /> :
         <Fragment>
              <Menu bgColor="#421782" />
          <div className='main-cont'>
            <div className="f1">
            <Filters />
            </div>
              <div className="header-fixed">
              <p className="header-firstP">Изработено од студентите на академија за програмирање на <a href="https://brainster.co/" className="brainster-link">Brainster</a></p>
              <Header />
             
              <div className="f2">
            <Filters />
                 </div>
              </div>
              <GamesList/>
              <div className="down-header">
              <Header />
              </div>
          </div>
              <Footer />
         </Fragment>
        }
</div>
);
}
export default MainCont;