import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
// import {Provider} from "react-redux"

import Home from "../pages/Home";
import Drawer from "../pages/Drawer";

const MainRoutes = () => {
  return (
    //   <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/drawer" component={Drawer} />
      </Switch>
    </BrowserRouter>
    //   </Provider>
  );
};

export default MainRoutes;
