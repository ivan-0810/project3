import React, { useContext } from 'react';
import { Context } from "../../../Context/GamesContext";
import "./GamesList.css";
import { Link } from "react-router-dom"


const GamesList = (props) => {
    const { duplicateGames } = useContext(Context);  
  
    return (
        
        <div className='games-list' >
            {duplicateGames.map((game,inx) => (
                <Link to={`Game/${game.id}`}
                key={inx}>
                <div key={game.id} className="game">
                    <div className="img-game"
                        style={{ backgroundImage: "url(" + require(`../../../images/${game.id}.jpeg`) + ")",
                            backgroundPosition:"center",
                            backgroundSize:"cover"
                        }}>
                             
                    </div>
                    <div className="game-desc">
                        <div className="game-txt">
                            <p className="game-title">{game.title}</p>
                            <p className="game-category">Категорија: <span>{game.category}</span></p>
                          
                            <div className="clock-timeFrame">
                                <i className="far fa-clock font-awesome-icon"></i>
                                <div>
                                    <p className="game-time-frame">Времетраење</p>
                                    <p className="game-minutes">{game.timeFrame}</p>
                                </div>
                            </div>
                          
                        </div>
                        <div className="img-icon">
                            <div><img src={game.image} alt="" /></div>
                        </div>
                    </div>
                </div>
                </Link>
            ))}
        </div>
       
    );
}
export default GamesList;