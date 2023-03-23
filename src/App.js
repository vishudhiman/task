import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Component/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
