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
import Admin from '../Admin';
import Participate from '../Participate';
import Loading from '../Loading';

// Function to get the animals from the back api
const baseUrl = 'https://spa-apotheose.herokuapp.com';

// == Composant
const App = () => {
  // States hooks
  const [loading, setLoading] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [inputTextAnimals, setInputTextAnimals] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [tags, setTags] = useState([]);
  const [species, setSpecies] = useState([]);
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [buttonCategories, setButtonCategories] = useState('');

  // Call API with axios
  const getAnimals = () => {
    setLoading(true);
    axios({
      method: 'get',
      url: `${baseUrl}/animals`,
    })
      .then((response) => {
        setAnimals(response.data);
      })
      .catch((error) => {
        console.trace(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getBreeds = () => {
    setLoading(true);
    axios({
      method: 'get',
      url: `${baseUrl}/breeds`,
    })
      .then((response) => {
        setBreeds(response.data);
      })
      .catch((error) => {
        console.trace(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getTags = () => {
    setLoading(true);
    axios({
      method: 'get',
      url: `${baseUrl}/tags`,
    })
      .then((response) => {
        setTags(response.data);
      })
      .catch((error) => {
        console.trace(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getSpecies = () => {
    setLoading(true);
    axios({
      method: 'get',
      url: `${baseUrl}/species`,
    })
      .then((response) => {
        setSpecies(response.data);
      })
      .catch((error) => {
        console.trace(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getArticles = () => {
    setLoading(true);
    axios({
      method: 'get',
      url: `${baseUrl}/articles`,
    })
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.trace(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getCategories = () => {
    setLoading(true);
    axios({
      method: 'get',
      url: `${baseUrl}/categories`,
    })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.trace(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Hooks effects
  useEffect(() => {
    getAnimals();
    getBreeds();
    getTags();
    getSpecies();
    getArticles();
    getCategories();
  }, []);

  // Method for filter the search with name of animals
  const filterName = (event) => {
    setInputTextAnimals(event);
  };
  const filterNameAnimals = animals.filter(
    (animalsObject) => animalsObject.name.toLowerCase().includes(inputTextAnimals.toLowerCase()),
  );

  // Method for filter articles with categories
  const filterCategories = (event) => {
    setButtonCategories(event.target.value);
  };

  const filterCategoriesArticles = articles.filter(
    // eslint-disable-next-line max-len
    (articlesObject) => articlesObject.category_name.toLowerCase().includes(buttonCategories.toLowerCase()),
  );

  return (
    <div className="app">
      <Header />
      {
        loading && <Loading />
      }
      {
        !loading && (
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/animaux" exact>
            <Adoption
              animals={filterNameAnimals}
              breeds={breeds}
              tags={tags}
              species={species}
              inputTextAnimals={inputTextAnimals}
              filterName={filterName}
            />
          </Route>
          <Route path="/animaux/:id" exact>
            <Animal animal={animals} />
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
            <Blog
              datas={buttonCategories === 'allCategories' ? articles : filterCategoriesArticles}
              categories={categories}
              filterCategories={filterCategories}
            />
          </Route>
          <Route path="/articles/:id" exact>
            <Article article={articles} />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Error404 />
        </Switch>
        )
      }
      <Footer />
    </div>
  );
};

// == Export
export default App;
