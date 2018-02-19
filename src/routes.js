import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./components/App";
import About from "./components/About";

const Routes = props => (
  <Router {...props}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default Routes;
