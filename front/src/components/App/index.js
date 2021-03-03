// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './styles.scss';
import Home from '../Home';
import Header from '../Header';
import Adoption from '../Adoption';
import Donate from '../Donate';
import Footer from '../Footer';
import Error404 from '../Error404';

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
      <Route path="/don" exact>
        <Donate />
      </Route>
      <Error404 />
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
