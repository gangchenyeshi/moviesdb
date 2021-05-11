import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import './App.css';
import "./css/App.css";
import Nav from "./components/Nav";
// import Search from "./components/Search";
import Home from "./views/Home";
import Popular from "./views/Popular";
import PopularBattle from "./views/PopularBattle";
// import Weekly from "./views/Weekly";
// import WeeklyBattle from "./views/WeeklyBattle";
import Favorites from "./views/Favorites";

function App() {
  return (
    <BrowserRouter>

      <Nav />
      {/* <Search /> */}

      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/popular/page-no/:page" component={Popular} />
        <Route exact path="/popular/" component={Popular} />
        {/* <Route exact path="/popularBattle" component={PopularBattle} />
        <Route exact path="/weekly" component={Weekly} />
        <Route exact path="/weeklyBattle" component={WeeklyBattle} />
        <Route exact path="/favorites" component={Favorites} /> */}
      </AnimatedSwitch>




    </BrowserRouter>

  );
}

export default App;
