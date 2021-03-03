// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './styles.scss';
import Home from '../Home';
import Header from '../Header';
import Adoption from '../Adoption';
import Footer from '../Footer';
import Error404 from '../Error404';
import Join from '../Join';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/animaux" exact>
        <Adoption />
      </Route>
      <Route path="/rejoindre" exact>
        <Join />
      </Route>
      <Error404 />
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
