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
    const bg= {background: "linear-gradient( -16deg, rgb(66, 23, 130) 32%, transparent 18%,transparent 67%, rgb(66, 23, 130) 67%)"}
    const { forma } = useContext(Context);
return (
    <div className="Box"style={bg}>
        {forma ? <Forma /> :
         <Fragment>
              <Menu bgColor="#421782" />
          <div className='main-cont'>
              <div className="header-fixed">
              <p className="header-firstP">Изработено од студентите на академија за програмирање на <a href="https://brainster.co/" className="brainster-link">Brainster</a></p>
              <Header />
             
              <Filters />
              </div>
              <GamesList/>
              <div style={{padding: "60px 0 100px 0"}}>
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