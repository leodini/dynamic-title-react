import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from "./Users";
import User from "./User";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/:id" component={User} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
