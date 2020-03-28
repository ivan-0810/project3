import React, { Fragment } from 'react';
import Menu from '../Menu/Menu';
import "./Rendergame.css";
import Header from '../MainCont/Header/Header';
import Footer from '../Footer/Footer';
import useFetch from "../../Hooks/useFetch"


const RenderGame = props => {
 
    
    //const { games } = useContext(Context);      
  //  const [params] = useState(parseInt(props.match.params.id));
    //const gamesParams = games[params];
    const games = useFetch(
        `https://brainsterboxapi.herokuapp.com/games/${props.photoId}`
      );
    const stepDescirption = (desc) => {
        if (desc.includes("\n")) {
            let l = desc.indexOf("\n")
            let p = desc.slice(0, l);

            return(
       <div>
                <p>{p}</p>
            {desc.slice(l).split("\n").map((i,inx) => (
                <p style={{marginLeft:"20px"}} key={inx}>{i}</p>
            ))}
       </div>
            )
        } else {
            return (
            <p>{desc}</p>
            )
        }
    }
    return (

        <div className='render-game' >
                {games && (
                  <Fragment>
                                    <Menu bgColor="transparent" />
                                <div className="clip-path" style={
                                    {   backgroundImage: "url(" + require(`../../images/${games.id}.jpeg`) + ")",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover"
                                }}>
                    
                                </div>
                    
                                <h1 className="title">{games.title}</h1>
                                <div className="game-spec">
                    
                                    <div className="game-spec-categories">
                                        <i className="far fa-clock font-awesome-icon"></i>
                                        <div>
                                            <p className="game-time-frame">Time Frame</p>
                                            <p className="game-minutes">{games.timeFrame}</p>
                                        </div>
                                    </div>
                                    <div className="game-spec-categories">
                                        <i className="fas fa-user-friends font-awesome-icon"></i>
                                        <div>
                                            <p className="game-time-frame">Group Size</p>
                                            <p className="game-minutes">{games.groupSize}</p>
                                        </div>
                                    </div>
                                    <div className="game-spec-categories">
                                        <i className="fas fa-landmark font-awesome-icon"></i>
                                        <div>
                                            <p className="game-time-frame">Facilitation Level</p>
                                            <p className="game-minutes">{games.level}</p>
                                        </div>
                                    </div>
                                    <div className="game-spec-categories">
                                        <i className="far fa-square font-awesome-icon"></i>
                                        <div>
                                            <p className="game-time-frame">Comfort Zone</p>
                                            <p className="game-minutes">{games.level}</p>
                                        </div>
                                    </div>
                                    <div className="game-spec-categories">
                                        <i className="fas fa-paint-roller font-awesome-icon"></i>
                                        <div>
                                            <p className="game-time-frame">Materials</p>
                                            <p className="game-minutes">{games.materials}</p>
                                        </div>
                                    </div>
                    
                                </div>
                                <div className="game-text">
                                    <p className="game-text-desc">{games.description}</p>
                    
                                    {games.steps.map((step,inx) => (
                                        <div className="steps" key={inx}>
                                            <h3>{step.stepDescription.length >0 && step.step}</h3>
                                            {stepDescirption(step.stepDescription)}
                                        </div>
                                    ))}
                                </div>
                                <div className="clip-path-2">
                                    <div style={{ paddingTop: '35vh' }}>
                                        <Header />
                                    </div>
                                </div>
                                <Footer />
                  </Fragment>
                )}
        </div>
    );
}
export default RenderGame;     