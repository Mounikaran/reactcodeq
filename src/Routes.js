import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./components/HomePage";

import Login from "./components/account/Login";
import Register from "./components/account/Register";
//  password change
import PasswordReset from './components/account/PasswordReset'
import PasswordResetChange from './components/account/PasswordResetChange'
import EmailSent from "./components/account/EmailSent";

// Users
// import Profile from "./components/user/Profile";
import DashBoard from "./components/user/DashBoard";

// Questions
import QuestionCreate from "./components/post/question/QuestionCreate";
import QuestionView from './components/post/question/QuestionView';

import Page404 from "./components/404/Page404";

import GroupView from "./components/post/groups/GroupView";
import Chat from "./components/chat/Chat";
import Complaint from "./components/complaints/Complaint";

import Dashboard from "./components/admin/Dashboard";

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

        {/* <Route
          exact
          path="/profile"
          component={() => <Profile {...this.props} />}
        /> */}
        <Route exact path="/dashboard" component={() => <DashBoard {...this.props} />} />

        {/* Question routes */}
        <Route
          exact
          path="/question/ask"
          component={() => <QuestionCreate {...this.props} />}
        />
        <Route
          exact
          path="/question/:slug"
          component={QuestionView}
        />

        {/* groups */}

        <Route exact path="/groups" component={GroupView} />

        {/* chat */}
        <Route exact path="/chat" component={Chat} />

        {/* Complaints */}
        <Route exact path="/complaint" component={Complaint} />

        {/* HomePage  */}
        <Route exact path="/" component={() => <HomePage {...this.props} />} />
        
        {/* admin page */}
        <Route exact path="/admin" component={Dashboard}/>

        {/* 404 page */}
        <Route exact path="/404" component={Page404} />
        <Redirect from="*" to="/404" />
      
      </Switch>
    );
  }
}

export default Routes;
