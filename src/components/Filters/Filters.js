import React, { useContext, useState, useEffect, Fragment } from 'react';
import "./Filter.css"
import { Context } from '../../Context/GamesContext';
import Popup from '../../Popup';


const Filters = () => {
    const { games, show, filterCards, isTeam, isAction, isLeader, isInovation, allCards, isTimeFrame1, isTimeFrame2, isTimeFrame3, isTimeFrame4, isGroupSize1, isGroupSize2, isGroupSize3, isGroupSize4 } = useContext(Context);

    const [isScrolling, setIsScrolling] = useState(false);
    const [filter, setFilter] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            const body = document.body;
            const html = document.documentElement;
            const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            const windowBottom = windowHeight + window.pageYOffset;
            if (windowBottom >= docHeight) {
                setIsScrolling(true)
            } else {
                setIsScrolling(false)
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);


    const all = games.length;
    const innovation = games.filter(data => data.category.toLowerCase() === "иновации").length;
    const selfLeadership = games.filter(data => data.category.toLowerCase() === "лидерство").length;
    const action = games.filter(data => data.category.toLowerCase() === "акција").length;
    const team = games.filter(data => data.category.toLowerCase() === "тим").length;

    return (<Fragment>
           {!filter && !isScrolling && 
            <div className={isScrolling  ? "filter-games-button hideFilter" : "filter-games-button showFilter"} onClick={()=> setFilter(!filter)}>
            <button>filter games</button><span><i className="fas fa-filter"></i></span>
        </div>
           }
        
            <div className="filters" style={filter ? {display:"flex"} : {}}>
                <div className="inner-filters">
                <div className="filter-close-btn" onClick={() => setFilter(!filter)}>
                    <button>close</button>
                </div>
                    <div className="category">
                        <p>Browse by Category</p>
                        <div>
                            {show && <Popup text="there are no such a game" />}
                            <button className="filter-btn" onClick={(e) => filterCards(e)} tag="category" name="energizes">Energizes<span>({})</span></button>

                            <button className={isInovation ? "selected filter-btn" : "filter-btn"}
                                tag="category" name="иновации" onClick={(e) => filterCards(e)}>innovation<span>({innovation})</span></button>

                            <button className={isLeader ? "selected filter-btn" : "filter-btn"}
                                tag="category" name="лидерство" onClick={(e) => filterCards(e)}>self-leadership<span>({selfLeadership})</span></button>

                            <button className={isAction ? "selected filter-btn" : "filter-btn"}
                                tag="category" name="акција" onClick={(e) => filterCards(e)}>action<span>({action})</span></button>

                            <button className={isTeam ? "selected filter-btn" : "filter-btn"}
                                tag="category" name="тим" onClick={(e) => filterCards(e)}>team<span>({team})</span></button>

                            <button className={allCards ? "selected filter-btn" : "filter-btn"}
                                tag="category" name="all" onClick={(e) => filterCards(e)}>all<span>({all})</span></button>
                        </div>
                    </div>
                    <div className="time-group">
                        <div className="time-frame">
                            <p>Time frame(minutes)</p>
                            <div>
                                <button className={isTimeFrame1 ? "selected filter-btn" : "filter-btn"}
                                    tag="timeFrame" name="5-30" onClick={(e) => filterCards(e)}>5-30</button>
                                <button className={isTimeFrame2 ? "selected filter-btn" : "filter-btn"} tag="timeFrame" name="30-60" onClick={(e) => filterCards(e)}>30-60</button>
                                <button className={isTimeFrame3 ? "selected filter-btn" : "filter-btn"} tag="timeFrame" name="60-120" onClick={(e) => filterCards(e)}>60-120</button>
                                <button className={isTimeFrame4 ? "selected filter-btn" : "filter-btn"} tag="timeFrame" name="120-240" onClick={(e) => filterCards(e)}>120-240</button>
                            </div>
                        </div>
                        <div className="group-size">
                            <p>Group size</p>
                            <div>
                                <button className={isGroupSize1 ? "selected filter-btn" : "filter-btn"} tag="groupSize" name="2-10" onClick={(e) => filterCards(e)}>2-10</button>

                                <button className={isGroupSize2 ? "selected filter-btn" : "filter-btn"} tag="groupSize" name="2-40" onClick={(e) => filterCards(e)}>2-40</button>

                                <button className={isGroupSize3 ? "selected filter-btn" : "filter-btn"} tag="groupSize" name="3-40" onClick={(e) => filterCards(e)}>3-40</button>
                                <button className={isGroupSize4 ? "selected filter-btn" : "filter-btn"} tag="groupSize" name="2-40+" onClick={(e) => filterCards(e)}>2-40+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
    );
}
export default Filters;