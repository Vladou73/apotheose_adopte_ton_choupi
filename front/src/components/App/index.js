// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './styles.scss';
import Header from '../Header';
import Adoption from '../Adoption';
import Footer from '../Footer';
import Error404 from '../Error404';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact>
        {/* Composant Home */}
      </Route>
      <Route path="/animaux" exact>
        <Adoption />
      </Route>
      <Error404 />
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
