import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "./App.css";

import NavBar from "./components/layouts/NavBar";
import AdminNavBar from "./components/layouts/AdminNavBar"
import Footer from "./components/layouts/Footer";
import Routes from "./Routes";

import * as actions from "./store/actions/actions";

axios.defaults.baseURL = "http://127.0.0.1:8000/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      in_reset: false,
      is_admin : true,
    };
  }

  componentDidMount() {
    this.props.onTryAutoSignup();
    this.props.onLoadTags();
    this.props.onLoadQuestions();
    // const url = window.location.href;
    // const reset = "http://localhost:3000/password/";
    // if (url.includes(reset)) {
    //   this.setState({
    //     in_reset: true,
    //   });
    // } else {
    //   this.setState({
    //     in_reset: false,
    //   });
    // }
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
        {this.state.is_admin ? 
        <AdminNavBar {...this.props} />
        :
        <NavBar {...this.props} />
        }
          <main>
            <Routes {...this.props} />
          </main>
        </BrowserRouter>
        {this.state.is_admin ? "" : <Footer />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    token: state.token,
    user: JSON.parse(state.user),
    profile : JSON.parse(state.profile),
    tags : state.tags,
    questions: state.questions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    onLoadTags: () => dispatch(actions.loadTags()),
    onLoadQuestions: () => dispatch(actions.loadQuestions()),
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// function App() {
//   const [ token, setToken ] = useState("");

//   const userLogin = (tok) => {
//     setToken(tok);
//   };

//   return (
//     <Fragment>
//       <BrowserRouter>
//         <NavBar />
//         <main>
//           <Routes userLogin={userLogin} />
//         </main>
//       </BrowserRouter>
//       <Footer />
//     </Fragment>
//   );
// }
