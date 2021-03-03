// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Adoption from '../Adoption';
import Home from '../Home';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <h1 className="maintitle">Projet SPA</h1>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/animaux" exact>
        <Adoption />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
