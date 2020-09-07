import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/user/Login";
import HomePage from "./components/HomePage";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/login"
          component={() => <Login {...this.props} />}
        />
        <Route
          exact
          path="/register"
          component={() => <Register {...this.props} />}
        />
        <Route
          exact
          path="/profile"
          component={() => <Profile {...this.props} />}
        />
        <Route exact path="/" component={() => <HomePage {...this.props} />} />
      </Switch>
    );
  }
}

export default Routes;
