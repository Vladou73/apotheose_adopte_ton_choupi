// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './styles.scss';
import Adoption from '../Adoption';

// == Composant
const App = () => (
  <div className="app">
    <h1>Projet SPA</h1>
    <Switch>
      <Route path="/" exact>
        */ Composant Home */
      </Route>
      <Route path="/animaux" exact>
        <Adoption />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
