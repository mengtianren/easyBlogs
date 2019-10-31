import React from "react";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "../assets/router.less";

import Index from "../app/index";
import Detail from "../app/detail";
import User from "../app/user";

const AppRouter = () => (
  <Router>
    <Redirect form="/" to="/index/all" />
    <Switch>
      <Route path="/index" component={Index} />
      <Route path="/user/" component={User} />
      <Route path="/detail/:id" component={Detail} />
    </Switch>
  </Router>
);

export default AppRouter;
