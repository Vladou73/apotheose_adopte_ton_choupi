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
  const [animalData, setAnimalData] = useState({
    name: animals.name,
    birthdate: animals.birthdate,
    description: animals.description,
    gender_id: animals.gender_id,
    // tags: [{ id: animals.tags.id }],
    // breeds: [{ id: animals.breeds.id }],
  });
  const [adminUsername, setAdminUsername] = useState('');
  const [confirmationAdd, setConfirmationAdd] = useState('hidden');
  const [confirmationDelete, setConfirmationDelete] = useState('hidden');
  const [modalAddArticleIsOpen, setModalAddArticleIsOpen] = useState(false);
  const [articleData, setArticleData] = useState({
    title: '',
    content: '',
    pin: false,
    category_id: '',
  });
  const [addNameAnimal, setAddNameAnimal] = useState('');
  const [addBirthdateAnimal, setAddBirthdateAnimal] = useState('');
  const [addGenderAnimal, setAddGenderAnimal] = useState();
  const [addTagsAnimal, setAddTagsAnimal] = useState([]);
  const [addBreedsAnimal, setAddBreedsAnimal] = useState([]);
  const [addDescriptionAnimal, setAddDescriptionAnimal] = useState('');

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

  // Method to change the modal state to add an article (true/false)
  const changeModalStateAddArticle = () => {
    setModalAddArticleIsOpen(!modalAddArticleIsOpen);
  };

  // Animals get list
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

  // Breeds get list
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

  // Tags get list
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

  // Species get list
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

  // Articles get list
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

  // Categories get list
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

  // handle change & submit to add an article

  const handleChangeAddArticle = (e) => {
    const newData = { ...articleData };
    newData[e.target.id] = e.target.value;
    setArticleData(newData);
    console.log(newData);
  };

  const showConfirmationDelete = () => {
    setConfirmationDelete('visible');
    setTimeout(() => {
      setConfirmationDelete('hidden');
    }, 3000);
  };

  const showConfirmationAdd = () => {
    setConfirmationAdd('visible');
    setTimeout(() => {
      setConfirmationAdd('hidden');
    }, 3000);
  };

  const handleSubmitAddArticle = (e) => {
    e.preventDefault();
    const addArticle = () => {
      axios({
        method: 'POST',
        url: `${baseUrl}/admin/addArticle`,
        data: {
          title: articleData.title,
          content: articleData.content,
          pin: false,
          author_id: 1,
          category_id: articleData.category_id,
          media_id: 3,
        },
      })
        .then((response) => {
          console.log(response.data);
          getArticles();
          setModalAddArticleIsOpen(false);
          showConfirmationAdd();
        })
        .catch((error) => {
          console.trace(error);
        });
    };
    addArticle();
  };

  // Connection admin
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
          setAdminUsername(response.data.username);
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

  // Animal delete list
  const deleteAnimalsList = (animal) => {
    if (window.confirm(`Voulez vous supprimer ${animal.name} ? `)) {
      axios({
        method: 'delete',
        url: `${baseUrl}/admin/animals/${animal.id}`,
      })
        .then(() => {
          getAnimals();
        })
        .catch((error) => {
          console.trace(error);
        });
    }
  };

  // Animal add list
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
          creator_id: 1,
          gender_id: addGenderAnimal,
          tags: addTagsAnimal,
          breeds: addBreedsAnimal,
          medias: [{
            id: 4,
            url: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }],
        },
      })
        .then((response) => {
          getAnimals();
          console.log(response.data);
          setModalAddArticleIsOpen(false);
          alert('le choupi est ajouté');
        })
        .catch((error) => {
          console.trace(error);
          alert('une erreur est survenue');
        });
    };
    postAnimal();
  };

  const deleteArticle = (article) => {
    if (window.confirm(`Etes vous sur de vouloir supprimer l'article : ${article.title} ?`)) {
      setLoading(true);
      axios({
        method: 'delete',
        url: `${baseUrl}/admin/articles/${article.id}`,
      })
        .then(() => {
          getArticles();
          showConfirmationDelete();
        })
        .catch((error) => {
          console.trace(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
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

  // Method onChange to edit an animal
  const handleChangeEditAnimal = (e) => {
    const newData = { ...animalData };
    newData[e.target.id] = e.target.value;
    setAnimalData(newData);
    console.log(newData);
    // setAnimals( animals.filter((animalObject) => animalObject.id === animalData.id));
  };

  // Method onSubmit to edit an animal
  const handleSubmitEditAnimal = (id) => {
    console.log(id);
    const editAnimal = () => {
      axios({
        method: 'PUT',
        url: `${baseUrl}/admin/animals/${id}`,
        data: {
          name: animalData.name,
          birthdate: animalData.birthdate,
          description: animalData.description,
          gender_id: animalData.gender_id,
          tags: [{ id: 2 }],
          breeds: [{ id: 2 }],
        },
      })
        .then((response) => {
          console.log(response.data);
          getAnimals();
          alert('Animal modifié !');
        })
        .catch((error) => {
          console.trace(error);
        });
    };
    editAnimal();
  };

  // NAME ONCHANGE ADD ANIMAL LIST
  const addChangeNameAnimal = (event) => {
    setAddNameAnimal(event.target.value);
  };

  // BIRTHDATE ONCHANGE ADD ANIMAL LIST
  const addChangeBirthdateAnimal = (event) => {
    setAddBirthdateAnimal(event.target.value);
  };

  // GENDER ONCHANGE ADD ANIMAL LIST
  const addChangeGenderAnimal = (event) => {
    setAddGenderAnimal(event.target.value);
  };

  // DESCRIPTION ONCHANGE ADD ANIMAL LIST
  const addChangeDescriptionAnimal = (event) => {
    setAddDescriptionAnimal(event.target.value);
  };

  // TAGS ONCHANGE ADD ANIMAL LIST
  const addChangeTagsAnimal = (event) => {
    setAddTagsAnimal((addTagsAnimal) => [...addTagsAnimal, { id: event.target.value }]);
  };

  // BREEDS ONCHANGE ADD ANIMAL LIST
  const addChangeBreedsAnimal = (event) => {
    // setAddBreedsAnimal(event.target.value);
    setAddBreedsAnimal((addBreedsAnimal) => [...addBreedsAnimal, { id: event.target.value }]);
  };

  // ** Methode for Visitors ** //
  // Method filter of animals list by name
  const filterName = (event) => {
    setInputTextAnimals(event);
    setFilterAnimalsReset(false);
  };
  const filterNameAnimals = (
    animals.filter((animalsObject) => animalsObject.name.toLowerCase().includes(inputTextAnimals.toLocaleLowerCase())));

  // ** Not use for the moment ** //
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
  // ** //

  // reset filters of animals list
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
              articlesNumber={articles.length}
              animalsNumber={animals.length}
              adminUsername={adminUsername}
            />
          </Route>
          {isLogged && (
            <>
              <Route path="/admin/gestion-animaux" exact>
                <ManageAnimals
                  animals={animals}
                  tags={tags}
                  breeds={breeds}
                  buttonDeleteAnimals={deleteAnimalsList}
                  changeModalStateAddArticle={changeModalStateAddArticle}
                  modalAddArticleIsOpen={modalAddArticleIsOpen}
                  addAnimalSubmit={addAnimalSubmit}
                  addChangeNameAnimal={addChangeNameAnimal}
                  addChangeBirthdateAnimal={addChangeBirthdateAnimal}
                  addChangeDescriptionAnimal={addChangeDescriptionAnimal}
                  addChangeGenderAnimal={addChangeGenderAnimal}
                  addChangeTagsAnimal={addChangeTagsAnimal}
                  addChangeBreedsAnimal={addChangeBreedsAnimal}
                />
              </Route>
              <Route path="/admin/gestion-articles" exact>
                <ManageArticles
                  articles={articles}
                  deleteArticle={deleteArticle}
                  modalAddArticleIsOpen={modalAddArticleIsOpen}
                  handleSubmitAddArticle={handleSubmitAddArticle}
                  handleChangeAddArticle={handleChangeAddArticle}
                  changeModalStateAddArticle={changeModalStateAddArticle}
                  confirmationAdd={confirmationAdd}
                  confirmationDelete={confirmationDelete}
                />
              </Route>
              <Route path="/admin/gestion-animaux/:id" exact>
                <ManageAnimal
                  handleSubmitEditAnimal={handleSubmitEditAnimal}
                  handleChangeEditAnimal={handleChangeEditAnimal}
                  animal={animals}
                  animalData={animalData}
                />
              </Route>
              <Route path="/admin/gestion-articles/:id" exact>
                <ManageArticle
                  articles={articles}
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
