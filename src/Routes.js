import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/account/Login";
import HomePage from "./components/HomePage";
import Register from "./components/account/Register";
import Profile from "./components/user/Profile";
import PasswordReset from './components/account/PasswordReset'
import PasswordResetChange from './components/account/PasswordResetChange'
import EmailSent from "./components/account/EmailSent";


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

        {/* Password Reset Router */}

        <Route exact path="/password/reset/" component={PasswordReset} />
        <Route exact path="/email-has-been-sent/" component={EmailSent} />
        <Route exact path="/reset/:uid/:token/" component={PasswordResetChange} />


        {/* HomePage  */}
        <Route exact path="/" component={() => <HomePage {...this.props} />} />

      </Switch>
    );
  }
}

export default Routes;
