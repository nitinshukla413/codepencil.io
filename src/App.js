import React from "react";
import Home from "./components/Home";
import WebEditor from "./components/WebEditor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/web" component={WebEditor} />
      </Switch>
    </Router>
  );
}

export default App;
