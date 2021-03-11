/* eslint-disable no-shadow */
/* eslint-disable max-len */
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
import ManageAnimals from '../ManageAnimals';
import ManageArticles from '../ManageArticles';
import ManageAnimal from '../ManageAnimal';
import ManageArticle from '../ManageArticle';
import ManageAddAnimal from '../ManageAddAnimal';

// Function to get the animals from the back api
const baseUrl = 'https://spa-apotheose.herokuapp.com';

// == Composant
const App = () => {
  // States hooks
  const [loading, setLoading] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [tags, setTags] = useState([]);
  const [species, setSpecies] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  // Admin
  const [inputUsernameAdmin, setInputUsernameAdmin] = useState('');
  const [inputPasswordAdmin, setInputPasswordAdmin] = useState('');
  // hook delete is checkbox in manage animals list.
  const [deleteAnimals, setDeleteAnimals] = useState([]);
  const [addNameAnimal, setAddNameAnimal] = useState('');
  const [addBirthdateAnimal, setAddBirthdateAnimal] = useState('00-00-0000');
  const [addGenderAnimal, setAddGenderAnimal] = useState();
  const [addTagsAnimal, setAddTagsAnimal] = useState();
  const [addBreedsAnimal, setAddBreedsAnimal] = useState();
  const [addDescriptionAnimal, setAddDescriptionAnimal] = useState('');
  const [addCreatorAnimal, setAddCreatorAnimal] = useState();

  // filter articles
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [buttonCategories, setButtonCategories] = useState('');
  // filter animals
  const [filterAnimalsReset, setFilterAnimalsReset] = useState('');
  const [inputTextAnimals, setInputTextAnimals] = useState('');
  // * Not use for the moment * //
  const [checkboxSpeciesAnimals, setCheckboxSpeciesAnimals] = useState('');
  const [selectTagsAnimals, setSelectTagsAnimals] = useState('');
  const [checkboxBreedsAnimals, setCheckboxBreedsAnimals] = useState('');

  // Control input admin page connection

  const handleChangeUsername = (event) => {
    setInputUsernameAdmin(event.target.value);
  };

  const handleChangePassword = (event) => {
    setInputPasswordAdmin(event.target.value);
  };

  // method to disconnect admin

  const adminDisconnect = () => {
    window.location = '/admin';
    setIsLogged(false);
  };

  // handle submit connection admin

  const handleSubmitAdmin = (evt) => {
    evt.preventDefault();
    const postUser = () => {
      axios({
        method: 'POST',
        url: `${baseUrl}/admin`,
        data: {
          username: inputUsernameAdmin,
          password: inputPasswordAdmin,
        },
      })
        .then((response) => {
          console.log(response.data);
          setIsLogged(true);
          evt.target.reset();
        })
        .catch((error) => {
          console.trace(error);
          alert('une erreur est survenue');
        });
    };
    postUser();
  };

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

  const deleteAnimalsList = (animal) => {
    const newList = animals.filter((animalsObject) => animalsObject.id !== animal.id);
    if (window.confirm(`Voulez vous supprimer ${animal.name} ? `)) {
      axios({
        method: 'delete',
        url: `${baseUrl}/admin/animals/${animal.id}`,
      })
        .then(() => {
          setAnimals(newList);
        })
        .catch((error) => {
          console.trace(error);
        });
    }
  };

  const addAnimalSubmit = (evt) => {
    evt.preventDefault();
    const postAnimal = () => {
      axios({
        method: 'POST',
        url: `${baseUrl}/admin/addAnimal`,
        data: {
          name: addNameAnimal,
          birthdate: addBirthdateAnimal,
          description: addDescriptionAnimal,
          creator_id: addCreatorAnimal,
          gender_id: addGenderAnimal,
          tags: [{ id: addTagsAnimal }],
          breeds: [{ id: addBreedsAnimal }],
          medias: [{ id: 2 }],
        },
      })
        .then((response) => {
          setAnimals(((animals) => [...animals, response.data]));
          console.log(response.data);
          alert('le choupi est ajouté');
        })
        .catch((error) => {
          console.trace(error);
          alert('une erreur est survenue');
        });
    };
    postAnimal();
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

  // ** Method for Admin ** //
  // CHECKBOX ANIMALS LIST
  // ( TODO : only keep in the state just that are checked )
  const checkAdminAnimalsList = (event) => {
    setDeleteAnimals((deleteAnimals) => [...deleteAnimals, { id: event.target.value }]);
  };

  // NAME ONCHANGE ADD ANIMAL LIST
  const addChangeNameAnimal = (event) => {
    setAddNameAnimal(event.target.value);
  };

  // BIRTHDATE ONCHANGE ADD ANIMAL LIST
  const addChangeBirthdateAnimal = (event) => {
    setAddBirthdateAnimal(event.target.value);
  };

  // DESCRIPTION ONCHANGE ADD ANIMAL LIST
  const addChangeDescriptionAnimal = (event) => {
    setAddDescriptionAnimal(event.target.value);
  };

  // CREATOR ID ONCHANGE ADD ANIMAL LIST
  const addChangeCreatorAnimal = (event) => {
    setAddCreatorAnimal(event.target.value);
  };

  // GENDER ONCHANGE ADD ANIMAL LIST
  const addChangeGenderAnimal = (event) => {
    setAddGenderAnimal(event.target.value);
  };

  // TAGS ONCHANGE ADD ANIMAL LIST
  const addChangeTagsAnimal = (event) => {
    setAddTagsAnimal(event.target.value);
  };

  // BREEDS ONCHANGE ADD ANIMAL LIST
  const addChangeBreedsAnimal = (event) => {
    setAddBreedsAnimal(event.target.value);
  };

  // ** Methode for Visitors ** //
  // Method filter of animals list
  // INPUT TEXT
  const filterName = (event) => {
    setInputTextAnimals(event);
    setFilterAnimalsReset(false);
  };
  const filterNameAnimals = (
    animals.filter((animalsObject) => animalsObject.name.toLowerCase().includes(inputTextAnimals.toLocaleLowerCase())));

  // CHECKBOX SPECIES
  const filterSpecies = (event) => {
    setCheckboxSpeciesAnimals(event.target.value);
    setFilterAnimalsReset(false);
  };
  // const filterSpeciesAnimals = (
  //   animals.filter((animalsObject) => animalsObject.species_name.includes(checkboxSpeciesAnimals)));

  // CHECKBOX BREEDS ! bug
  const filterBreeds = (event) => {
    setCheckboxBreedsAnimals(event.value);
    setFilterAnimalsReset(false);
  };
  //  const filterBreedsAnimals = (
  //    animals.filter((animalsObject) => animalsObject.species_id.includes(checkboxBreedsAnimals)));

  // SELECT BREEDS ! bug
  const filterTags = (event) => {
    setSelectTagsAnimals(event.value);
    setFilterAnimalsReset(false);
  };
  //  const filterTagsAnimals = (
  //    tags.filter((articlesObject) => articlesObject.name.toLowerCase().includes(selectTagsAnimals.toLowerCase(), animals)));

  const resetFilterAnimals = (event) => {
    setFilterAnimalsReset(event.target.value);
    setInputTextAnimals('');
  };

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
      <Header isLogged={isLogged} adminDisconnect={adminDisconnect} />
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
              animals={filterAnimalsReset ? animals : filterNameAnimals}
              breeds={breeds}
              tags={tags}
              species={species}
              inputTextAnimals={inputTextAnimals}
              filterName={filterName}
              filterTags={filterTags}
              filterSpecies={filterSpecies}
              filterBreeds={filterBreeds}
              resetFilterAnimals={resetFilterAnimals}
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
          <Route path="/admin" exact>
            <Admin
              inputUsernameAdmin={inputUsernameAdmin}
              handleChangeUsername={handleChangeUsername}
              inputPasswordAdmin={inputPasswordAdmin}
              handleChangePassword={handleChangePassword}
              handleSubmitAdmin={handleSubmitAdmin}
              isLogged={isLogged}
            />
          </Route>
          {isLogged && (
            <>
              <Route path="/admin/gestion-animaux" exact>
                <ManageAnimals
                  animals={animals}
                  checkAdminAnimalsList={checkAdminAnimalsList}
                  buttonDeleteAnimals={deleteAnimalsList}
                />
              </Route>
              <Route path="/admin/gestion-articles" exact>
                <ManageArticles articles={articles} />
              </Route>
              <Route path="/admin/gestion-animaux/:id" exact>
                <ManageAnimal
                  animal={animals}
                />
              </Route>
              <Route path="/admin/gestion-articles/1" exact>
                <ManageArticle
                  articles={articles[0]}
                />
              </Route>
              <Route path="/admin/ajout" exact>
                <ManageAddAnimal
                  addAnimalSubmit={addAnimalSubmit}
                  addNameAnimal={addNameAnimal}
                  addChangeNameAnimal={addChangeNameAnimal}
                  addBirthdateAnimal={addBirthdateAnimal}
                  addChangeBirthdateAnimal={addChangeBirthdateAnimal}
                  addDescriptionAnimal={addDescriptionAnimal}
                  addChangeDescriptionAnimal={addChangeDescriptionAnimal}
                  addCreatorAnimal={addCreatorAnimal}
                  addChangeCreatorAnimal={addChangeCreatorAnimal}
                  addGenderAnimal={addGenderAnimal}
                  addChangeGenderAnimal={addChangeGenderAnimal}
                  addTagsAnimal={addTagsAnimal}
                  addChangeTagsAnimal={addChangeTagsAnimal}
                  addBreedsAnimal={addBreedsAnimal}
                  addChangeBreedsAnimal={addChangeBreedsAnimal}
                />
              </Route>
            </>
          )}
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
