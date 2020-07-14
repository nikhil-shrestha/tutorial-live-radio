import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from '../layouts';

import { RadioPage, PreviewStationPage } from '../pages';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        exact
        component={RadioPage}
        layout={MainLayout}
        path="/radio"
      />
      <RouteWithLayout
        exact
        component={PreviewStationPage}
        layout={MainLayout}
        path="/radio/:stationId"
      />
      <Redirect from="/" to="/radio" />
    </Switch>
  );
};

export default Routes;
