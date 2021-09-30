import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DauntlessRouter from '../routes/DauntlessRouter';
import Users from '../containers/Users';

const Router = ({ children }) => (
  <BrowserRouter>
    <div>
      {children}
      <Switch>
        {DauntlessRouter.getRouteSlags().map(route =>
          <Route path={route.route} exact>
            <route.component/>
          </Route>)}
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
