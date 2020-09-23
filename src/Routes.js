import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";

import Login from "./components/account/Login";
import Register from "./components/account/Register";
//  password change
import PasswordReset from './components/account/PasswordReset'
import PasswordResetChange from './components/account/PasswordResetChange'
import EmailSent from "./components/account/EmailSent";

// Users
import Profile from "./components/user/Profile";

// Questions
import QuestionCreate from "./components/post/question/QuestionCreate";


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

        {/* Password Reset Router */}

        <Route exact path="/password/reset/" component={PasswordReset} />
        <Route exact path="/email-has-been-sent/" component={EmailSent} />
        <Route
          exact
          path="/reset/:uid/:token/"
          component={PasswordResetChange}
        />

        {/* User profile and dashboard */}

        <Route
          exact
          path="/profile"
          component={() => <Profile {...this.props} />}
        />

        {/* Question routes */}
      <Route exact path="/question/ask" component={ ()=> <QuestionCreate {...this.props} /> }/>

        {/* HomePage  */}
        <Route exact path="/" component={() => <HomePage {...this.props} />} />
      </Switch>
    );
  }
}

export default Routes;
