import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/user/Login";
import HomePage from "./components/HomePage";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { userLogin } = this.props;
    return (
      <Switch>
        <Route
          exact
          path="/login"
          component={() => <Login userLogin={userLogin} />}
        />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route component={HomePage} />
      </Switch>
    );
  }
}

export default Routes;
