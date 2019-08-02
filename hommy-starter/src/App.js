import React from "react";
//import "./App.css";
import Home from "./pages/Home";
import Houses from "./pages/Houses";
import SingleHouse from "./pages/SingleHouse";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/house" component={Houses} />
        <Route exact path="/single-house/:slug" component={SingleHouse} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
