// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './styles.scss';
import Adoption from '../Adoption';
import Footer from '../Footer';

// == Composant
const App = () => (
  <div className="app">
    <h1>Projet SPA</h1>
    <Switch>
      <Route path="/" exact>
        {/* Composant Home */}
      </Route>
      <Route path="/animaux" exact>
        <Adoption />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
