import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/user/Login";
import HomePage from "./components/HomePage";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route component={HomePage} />
      </Switch>
    );
  }
}

export default Routes;
