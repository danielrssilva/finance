import React from "react";
import { Router } from "react-router-dom";
import history from "./services/history";
import "./App.css";
import NavBar from "./components/NavBar";
import Routes from "./routes";

import { ReactComponent as Logo } from "./imgs/mint-logo.svg";
function App() {
  return (
    <Router history={history}>
      <NavBar />
      <Routes />
    </Router>
  );
}

export default App;
