import React, { createContext, useState, useEffect } from 'react';
import updateFunction from "../Hooks/useUpdateFunction";




export const Context = createContext({});

export const Provider = props => {

  const [forma, setForma] = useState(false);

  const onScrolTop = () => {
    window.scrollTo(0,0);
    }


  const [games] = useState(props.games);  
  const [duplicateGames, setDuplicateGames] = useState(props.games);

  
  const [count, setCount] = useState([0])
  const [count1, setCount1] = useState([0])
  const [names, setNames] = useState([])
  const [prazna, setPrazna] = useState([])


  const [show,setShow] = useState(false);

  const [isTeam, setIsTeam] = useState(false);
  const [isInovation, setIsInovation] = useState(false);
  const [isAction, setIsAction] = useState(false);
  const [isLeader, setIsLeader] = useState(false);
  const [allCards, setAllCards] = useState(true);
  const [isTimeFrame1, setIsTimeFrame1] = useState(false);
  const [isTimeFrame2, setIsTimeFrame2] = useState(false);
  const [isTimeFrame3, setIsTimeFrame3] = useState(false);
  const [isTimeFrame4, setIsTimeFrame4] = useState(false);
  const [isGroupSize1, setIsGroupSize1] = useState(false);
  const [isGroupSize2, setIsGroupSize2] = useState(false);
  const [isGroupSize3, setIsGroupSize3] = useState(false);
  const [isGroupSize4, setIsGroupSize4] = useState(false);


  const [isCategory, setIsCategory] = useState(false);
    const [isTimeFrame, setIsTimeFrame] = useState(false);
    const [isGroupSize, setIsGroupSize] = useState(false);

    const [categoryArr, setCategoryArr] = useState([]);
    const [timeFrameArr, setTimeFrameArr] = useState([]);
    const [groupSizeArr, setGroupSizeArr] = useState([]);



  const isSomethingTrue = (e) => {
    if (e === "иновации") { setIsInovation(true) };
    if (e === "акција") { setIsAction(true) };
    if (e === "лидерство") { setIsLeader(true) };
    if (e === "тим") (setIsTeam(true));
    if (e === "5-30") setIsTimeFrame1(true);
    if (e === "30-60") setIsTimeFrame2(true);
    if (e === "60-120") setIsTimeFrame3(true);
    if (e === "120-240") setIsTimeFrame4(true);
    if (e === "2-10") setIsGroupSize1(true);
    if (e === "2-40") setIsGroupSize2(true);
    if (e === "3-40") setIsGroupSize3(true);
    if ( e === "2-40+") setIsGroupSize4(true);
    return e;
  }
  const isSomethingFalse = (e) => {
    if (e === "иновации") { setIsInovation(false) };
    if (e === "акција") { setIsAction(false) };
    if (e === "лидерство") { setIsLeader(false) };
    if (e === "тим") { setIsTeam(false) };
    if (e === "5-30") setIsTimeFrame1(false);
    if (e === "30-60") setIsTimeFrame2(false);
    if (e === "60-120") setIsTimeFrame3(false);
    if (e === "120-240") setIsTimeFrame4(false);
    if (e === "2-10") setIsGroupSize1(false);
    if (e === "2-40") setIsGroupSize2(false);
    if (e === "3-40") setIsGroupSize3(false);
    if ( e === "2-40+") setIsGroupSize4(false);
     
    return e;
  }
  useEffect(() => {

    if (count1 > 0) {
        if (allCards === true) {
            setPrazna([])
            setDuplicateGames(games)
        } else {

            setDuplicateGames(prazna)    
        }
          
     
    }
    if(duplicateGames.length === 0){
      setShow(true);
    }
    return () => {
        setCount1(0)
    }

}, [count1, allCards,  duplicateGames.length, games, prazna]);

useEffect(() => {
  if (count > 0) {

      if (isCategory === true) {
          const takeArr = updateFunction(categoryArr, timeFrameArr, groupSizeArr, games, names, prazna);
          setPrazna(takeArr)
          setIsCategory(false)
      }
      if (isTimeFrame === true) {
          const takeArr = updateFunction(timeFrameArr, categoryArr, groupSizeArr, games, names, prazna);
          setPrazna(takeArr)
          setIsTimeFrame(false)

      }
      if (isGroupSize === true) {
          const takeArr = updateFunction(groupSizeArr, categoryArr, timeFrameArr, games, names, prazna)
          setPrazna(takeArr)
          setIsGroupSize(false)

      }
      setCount1(1)
  }
  return () => {
      setCount(0)
  }

}, [count, categoryArr, games, groupSizeArr,isCategory,isGroupSize,isTimeFrame,names,prazna, timeFrameArr]);





  const resetGames = () => {
    setAllCards(true);
            setShow(false)
            setIsAction(false);
            setIsTeam(false);
            setIsInovation(false);
            setIsLeader(false);
            setIsTimeFrame1(false);
            setIsTimeFrame2(false);
            setIsTimeFrame3(false);
            setIsTimeFrame4(false);
            setIsGroupSize1(false);
            setIsGroupSize2(false);
            setIsGroupSize3(false);
            setIsGroupSize4(false);
            setIsCategory(false);
            setIsTimeFrame(false);
            setIsGroupSize(false);
            setPrazna([]);
            setCategoryArr([])
            setTimeFrameArr([])
            setGroupSizeArr([])
    return setDuplicateGames(games)
  }


  const filterCards = (e) => {
    if(e.target.name === "energizes"){
      setShow(true);
    }
    if (e.target.name === "all") {
      setAllCards(true);
      setIsAction(false);
      setIsTeam(false);
      setIsInovation(false);
      setIsLeader(false);
      setIsTimeFrame1(false);
      setIsTimeFrame2(false);
      setIsTimeFrame3(false);
      setIsTimeFrame4(false);
      setIsGroupSize1(false);
      setIsGroupSize2(false);
      setIsGroupSize3(false);
      setIsGroupSize4(false);
      setIsCategory(false);
      setIsTimeFrame(false);
      setIsGroupSize(false);
      setPrazna([]);
      setCategoryArr([])
      setTimeFrameArr([])
      setGroupSizeArr([])
  
      return setDuplicateGames(games)
    } 
    else {
      
      
      if (e.target.className.split(" ")[0] !== "selected") {        
          let name = e.target.name;
          let tagName = e.currentTarget.attributes["tag"].value;
          setCount(1);
          setAllCards(false);
          isSomethingTrue(e.target.name);

          if (tagName === "category") {
              setCategoryArr(categoryArr => [...categoryArr, name]);
              setNames(["category", "timeFrame", "groupSize"]);
              setIsCategory(true);
          }
          if (tagName === "timeFrame") {
              setTimeFrameArr(timeFrameArr => [...timeFrameArr, name]);
              setNames(["timeFrame", "category", "groupSize"]);
              setIsTimeFrame(true);
          }
          if (tagName === "groupSize") {
              setGroupSizeArr(groupSizeArr => [...groupSizeArr, name]);
              setNames(["groupSize", "category", "timeFrame"]);
              setIsGroupSize(true);
          }

      }
       else {
          setCount(1);
          let name = e.target.name;
          let tagName = e.currentTarget.attributes["tag"].value;
          isSomethingFalse(name);

          if (tagName === "category") {
              setCategoryArr(categoryArr.filter(el => el !== name));
              setNames(["category", "timeFrame", "groupSize"])
              setIsCategory(true)
          }
          if (tagName === "timeFrame") {
              setTimeFrameArr(timeFrameArr.filter(el => el !== name));
              setNames(["timeFrame", "category", "groupSize"]);
              setIsTimeFrame(true)
          }
          if (tagName === "groupSize") {
              setGroupSizeArr(groupSizeArr.filter(el => el !== name));
              setNames(["groupSize", "category", "timeFrame"]);
              setIsGroupSize(true)

          }

      }
  }


}


  const generalData = {
    games,
    show,
    setShow,
    isTeam,
    isInovation,
    isLeader,
    isAction,
    allCards,
    isTimeFrame1,
    isTimeFrame2,
    isTimeFrame3,
    isTimeFrame4,
    isGroupSize1,
    isGroupSize2,
    isGroupSize3,
    isGroupSize4,
    duplicateGames,
    filterCards,
    resetGames,
    forma,
    setForma,
    onScrolTop
  };

  return (
    <Context.Provider value={generalData}>
      {props.children}
    </Context.Provider>);
};
