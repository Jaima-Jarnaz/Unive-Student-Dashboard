import CommonTask from "pages/CommonTask";
import Home from "pages/home";
import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/common" component={CommonTask} />
    </Switch>
  </>
);

export default Routes;
