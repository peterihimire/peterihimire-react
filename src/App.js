import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
