import React from 'react';
import './App.css';
import { Provider } from './Context/GamesContext';
import useFetch from "./Hooks/useFetch";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import MainCont from "./components/MainCont/MainCont";
import RenderGame from "./components/Game/RenderGame";
import "./components/Responsive.css";

function App() {
  const games = useFetch('https://brainsterboxapi.herokuapp.com/games');

  return (
    <div className="App">
      <BrowserRouter  basename={window.location.pathname}>
        <Switch>
          {games && (
            <Provider games={games}>
              <Route path="/" exact component={MainCont} />
              <Route path="/Game/:id" component={RenderGame} />
            </Provider>
          )}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
