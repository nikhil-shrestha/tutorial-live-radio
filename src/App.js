import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { RadioPage } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/radio" component={RadioPage} />
          <Redirect from="/" to="/radio" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
