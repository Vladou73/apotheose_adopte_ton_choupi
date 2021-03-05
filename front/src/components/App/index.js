// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './styles.scss';
import Home from '../Home';
import Header from '../Header';
import Adoption from '../Adoption';
import Animal from '../Animal';
import InfoAdoption from '../InfoAdoption';
import Donate from '../Donate';
import Contact from '../Contact';
import Blog from '../Blog';
import Article from '../Article';
import Footer from '../Footer';
import Error404 from '../Error404';
import Join from '../Join';
import Admin from '../Admin';
import Participate from '../Participate';

// Fake data
import Animals from './data/animals.json';
import ArticlesData from './data/articles.json';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/animaux" exact>
        <Adoption animals={Animals} />
      </Route>
      <Route path="/animaux/:id" exact>
        <Animal animal={Animals} />
      </Route>
      <Route path="/info_adoption" exact>
        <InfoAdoption />
      </Route>
      <Route path="/rejoindre" exact>
        <Join />
      </Route>
      <Route path="/participer" exact>
        <Participate />
      </Route>
      <Route path="/don" exact>
        <Donate />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
      <Route path="/articles" exact>
        <Blog datas={ArticlesData} />
      </Route>
      <Route path="/articles/:id" exact>
        <Article article={ArticlesData} />
      </Route>
      <Route path="/admin" exact>
        <Admin />
      </Route>
      <Error404 />
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
