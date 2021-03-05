// == Import npm
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

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
import Participate from '../Participate';

// Fake data
import Animals from './data/animals.json';
import ArticlesData from './data/articles.json';

// Function to get the animals from the back api
const baseUrl = 'https://spa-apotheose.herokuapp.com';

// == Composant
const App = () => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    axios({
      method: 'get',
      url: `${baseUrl}/animals`,
    })
      .then((response) => {
        console.log(response);
        setAnimals(response.data);
      })
      .catch((error) => {
        console.trace(error);
      });
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
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
        <Error404 />
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
