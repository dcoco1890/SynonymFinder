import React from "react";
import { Switch, Route } from "react-router-dom";
import Lookup from "../pages/Lookup";
import Home from "../pages/Home/Home";
import Translation from "../pages/Translation";
import ImgMW from "../comps/ImgMW";

const Main = () => (
  <main>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Home>
            <ImgMW />
          </Home>
        )}
      />
      <Route exact path="/lookup" component={Lookup} />
      <Route exact path="/translate" component={Translation} />
    </Switch>
  </main>
);

export default Main;
