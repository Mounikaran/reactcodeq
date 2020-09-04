import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "./App.css";

import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import Routes from "./Routes";

axios.defaults.baseURL = "http://127.0.0.1:8000/";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <NavBar {...this.props} />
          <main>
            <Routes {...this.props} />
          </main>
        </BrowserRouter>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
  };
};

export default connect(mapStateToProps)(App);

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
