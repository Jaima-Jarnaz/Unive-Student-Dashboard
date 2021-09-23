import CommonTask from "pages/CommonTask";
import Home from "pages/home";
import React from "react";
import { Route, Switch } from "react-router-dom";
import BgColor from "components/atoms/bg-color";
import { CardColor } from "components/organisms/card-color-practice";
import { CardThemeColor } from "components/organisms/card-theme";

const Routes = () => (
  <>
    <Switch>
      {/* <Route exact path="/" component={CardThemeColor} /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/common" component={CommonTask} />
    </Switch>
  </>
);

export default Routes;
