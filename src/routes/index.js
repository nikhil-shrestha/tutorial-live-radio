import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from '../layouts';

import { RadioPage, PreviewStationPage } from '../pages';
import { RadioLinks } from '../pages/Radio/components/RadioLinks';
import RadioDiv from '../pages/Radio/components/RadioLinks/RadioDiv';

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
      <RouteWithLayout
        exact
        component={RadioDiv}
        layout={MainLayout}
        path="/radio/california/:stationId"
      />
      <Redirect from="/" to="/radio" />
    </Switch>
  );
};

export default Routes;
