import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
// import axios from 'axios';
import "./App.css";

import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import Routes from "./Routes";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes />
        </main>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
