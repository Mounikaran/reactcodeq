import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "./App.css";

import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import Routes from "./Routes";

import * as actions from "./store/actions/actions";

axios.defaults.baseURL = "http://127.0.0.1:8000/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      in_reset: false,
    };
  }

  componentDidMount() {
    this.props.onTryAutoSignup();
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
          <NavBar {...this.props} />
          <main>
            <Routes {...this.props} />
          </main>
        </BrowserRouter>
        {this.state.in_reset ? "" : <Footer />}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
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
