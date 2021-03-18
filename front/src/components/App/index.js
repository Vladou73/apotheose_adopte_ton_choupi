/* eslint-disable no-shadow */
/* eslint-disable max-len */
// == Import npm
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { storage } from './firebase';

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
import Loading from '../Loading';
import ManageAnimals from '../ManageAnimals';
import ManageArticles from '../ManageArticles';
import ManageAnimal from '../ManageAnimal';
import ManageArticle from '../ManageArticle';
import Creator from '../Creator';

// Function to get the animals from the back api
const baseUrl = 'https://spa-apotheose.herokuapp.com';

// == Composant
const App = () => {
  // States hooks
  const [loading, setLoading] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [allAnimals, setAllAnimals] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [tags, setTags] = useState([]);
  const [species, setSpecies] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [pageAnimals, setPageAnimals] = useState(1);
  const [pageArticles, setPageArticles] = useState(1);
  // Admin
  const [inputUsernameAdmin, setInputUsernameAdmin] = useState('');
  const [inputPasswordAdmin, setInputPasswordAdmin] = useState('');
  const [animalData, setAnimalData] = useState({
    name: '',
    birthdate: '',
    description: '',
    gender_id: '',
    tags: '',
    breeds: '',
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
  // Firebase Upluad images
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);

  // filter articles
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [buttonCategories, setButtonCategories] = useState('');
  // filter animals
  const [inputTextAnimals, setInputTextAnimals] = useState('');
  const [checkboxSpeciesAnimals, setCheckboxSpeciesAnimals] = useState('');
  const [checkboxGenderAnimals, setCheckboxGenderAnimals] = useState('');
  const [checkboxAgeAnimals, setCheckboxAgeAnimals] = useState('');
  const [selectTagsAnimals, setSelectTagsAnimals] = useState('');
  const [checkboxSOSAnimals, setCheckboxSOSAnimals] = useState('');
  const [checkboxBreedsAnimals, setCheckboxBreedsAnimals] = useState('');

  // Method to change the modal state to add an article (true/false)
  const changeModalStateAddArticle = () => {
    setModalAddArticleIsOpen(!modalAddArticleIsOpen);
  };

  const onClickPageAnimals = (event) => {
    setPageAnimals(event);
  };

  const onClickPageArticles = (event) => {
    setPageArticles(event);
  };

  // Animals get list
  const getAnimals = async () => {
    setLoading(true);
    await axios({
      method: 'get',
      url: `${baseUrl}/animals?page=${pageAnimals}&items=8`,
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

  const getAllAnimals = async () => {
    setLoading(true);
    await axios({
      method: 'get',
      url: `${baseUrl}/animals`,
    })
      .then((response) => {
        setAllAnimals(response.data);
      })
      .catch((error) => {
        console.trace(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Breeds get list
  const getBreeds = async () => {
    setLoading(true);
    await axios({
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
  const getTags = async () => {
    setLoading(true);
    await axios({
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
  const getSpecies = async () => {
    setLoading(true);
    await axios({
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
      url: `${baseUrl}/articles?page=${pageArticles}&items=8`,
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

  const getAllArticles = () => {
    setLoading(true);
    axios({
      method: 'get',
      url: `${baseUrl}/articles`,
    })
      .then((response) => {
        setAllArticles(response.data);
      })
      .catch((error) => {
        console.trace(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Categories get list
  const getCategories = async () => {
    setLoading(true);
    await axios({
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
    getArticles();
    getAnimals();
    getAllAnimals();
    getAllArticles();
    getBreeds();
    getTags();
    getSpecies();
    getCategories();
  }, []);

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
    }, 5000);
  };

  const showConfirmationAdd = () => {
    setConfirmationAdd('visible');
    setTimeout(() => {
      setConfirmationAdd('hidden');
    }, 5000);
  };

  const handleSubmitAddArticle = (e) => {
    e.preventDefault();
    const addArticle = async () => {
      await axios({
        method: 'POST',
        url: `${baseUrl}/admin/addArticle`,
        data: {
          title: articleData.title,
          content: articleData.content,
          pin: false,
          author_id: 1,
          category_id: articleData.category_id,
          media_url: url,
        },
      })
        .then((response) => {
          console.log(response.data);
          getArticles();
          setModalAddArticleIsOpen(false);
          showConfirmationAdd();
          setImage(null);
          setUrl('');
          setProgress(0);
          setArticleData({
            title: '',
            content: '',
            pin: false,
            category_id: '',
            media_url: url,
          });
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
    const postUser = async () => {
      await axios({
        method: 'POST',
        url: `${baseUrl}/admin/signIn`,
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
  const deleteAnimalsList = async (animal) => {
    if (window.confirm(`Voulez vous supprimer ${animal.name} ? `)) {
      await axios({
        method: 'delete',
        url: `${baseUrl}/admin/animals/${animal.id}`,
      })
        .then(() => {
          getAnimals();
          showConfirmationDelete();
        })
        .catch((error) => {
          console.trace(error);
        });
    }
  };

  // Animal add list
  const addAnimalSubmit = (evt) => {
    evt.preventDefault();
    const postAnimal = async () => {
      await axios({
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
            url,
            type: 'image',
          }],
        },
      })
        .then((response) => {
          getAnimals();
          setModalAddArticleIsOpen(false);
          showConfirmationAdd();
          setImage(null);
          setUrl('');
          setProgress(0);
          console.log(response.data);
        })
        .catch((error) => {
          console.trace(error);
          alert('une erreur est survenue');
        });
    };
    postAnimal();
  };

  const deleteArticle = async (article) => {
    if (window.confirm(`Etes vous sur de vouloir supprimer l'article : ${article.title} ?`)) {
      setLoading(true);
      await axios({
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
  }, [pageAnimals, pageArticles]);

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
    // window.location = '/admin';
    setIsLogged(false);
  };
  // Method onSubmit to edit an animal
  const handleSubmitEditAnimal = (id, newAnimalData) => {
    console.log(id);
    const editAnimal = async () => {
      await axios({
        method: 'PUT',
        url: `${baseUrl}/admin/animals/${id}`,
        data: {
          name: newAnimalData.name,
          birthdate: newAnimalData.birthdate,
          description: newAnimalData.description,
          gender_id: newAnimalData.gender_id,
          // tags: [{ id: newAnimalData.id }],
          // breeds: [{ id: newAnimalData.id }],
          medias: [{
            url,
            type: 'image',
          }],
        },
      })
        .then((response) => {
          console.log(response.data);
          getAnimals();
          showConfirmationAdd();
          setProgress(0);
        })
        .catch((error) => {
          console.trace(error);
        });
    };
    editAnimal();
  };
  // Method onSubmit to edit an article
  const handleSubmitEditArticle = (id, newArticleData) => {
    console.log(id);
    console.log(newArticleData);
    const editArticle = async () => {
      await axios({
        method: 'PUT',
        url: `${baseUrl}/admin/articles/${id}`,
        data: {
          title: newArticleData.title,
          content: newArticleData.content,
          pin: false,
          category_id: newArticleData.category_id,
          media_url: url,
        },
      })
        .then((response) => {
          console.log(response.data);
          getArticles();
          showConfirmationAdd();
          setProgress(0);
        })
        .catch((error) => {
          console.trace(error);
        });
    };
    editArticle();
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
    addTagsAnimal.filter((tags, index) => addTagsAnimal.indexOf(tags) === index);
  };

  // BREEDS ONCHANGE ADD ANIMAL LIST
  const addChangeBreedsAnimal = (event) => {
    setAddBreedsAnimal((addBreedsAnimal) => [...addBreedsAnimal, { id: event.target.value }]);
    addBreedsAnimal.filter((breeds, index) => addBreedsAnimal.indexOf(breeds) === index);
  };
  // UPLUAD IMAGE METHOD WITH FIREBASE
  const handleChangeFirebase = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUploadDelete = () => {
    setImage(null);
    setUrl('');
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      },
    );
  };

  // ** Methode for Visitors ** //
  // Method filter of animals list by name
  const filterName = (event) => {
    setInputTextAnimals(event);
  };
  // SPECIES FILTER
  const filterSpecies = (event) => {
    setCheckboxSpeciesAnimals(event.target.value);
  };
  // GENDER FILTER
  const filterGender = (event) => {
    setCheckboxGenderAnimals(event.target.value);
  };
  // AGE FILTER
  const filterAge = (event) => {
    setCheckboxAgeAnimals(event.target.value);
  };
  // CHECKBOX BREEDS
  const filterBreeds = (event) => {
    setCheckboxBreedsAnimals(event.target.value);
  };
  // SELECT TAGS
  const filterTags = (event) => {
    setSelectTagsAnimals(event.target.value);
  };
  // FILTER SOS
  const filterSOS = (event) => {
    setCheckboxSOSAnimals(event.target.value);
  };

  const newAnimalsList = allAnimals.filter((animal) => {
    const filterByGender = checkboxGenderAnimals ? animal.gender_name === checkboxGenderAnimals : true;
    const filterByAge = checkboxAgeAnimals ? animal.ageLabel === checkboxAgeAnimals : true;
    const filterByBreeds = checkboxBreedsAnimals ? animal.breeds[0].name === checkboxBreedsAnimals : true;
    const filterByTags = selectTagsAnimals ? animal.tags[0].name === selectTagsAnimals : true;
    const filterBySOS = checkboxSOSAnimals ? animal.tags[0].name === checkboxSOSAnimals : true;
    const filterByName = animal.name.toLowerCase().includes(inputTextAnimals.toLocaleLowerCase());
    const filterBySpecies = checkboxSpeciesAnimals ? animal.species_name === checkboxSpeciesAnimals : true;

    return (filterByName && filterBySpecies && filterByBreeds && filterByGender && filterByTags && filterByAge && filterBySOS);
  });

  // Method for filter articles with categories
  const filterCategories = (event) => {
    setButtonCategories(event.target.value);
    setPageArticles(1);
  };
  const filterCategoriesArticles = articles.filter(
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
            <Home articles={articles} />
          </Route>
          <Route path="/animaux" exact>
            <Adoption
              animals={newAnimalsList}
              animalsCount={allAnimals.length}
              breeds={breeds}
              tags={tags}
              species={species}
              onClickPageAnimals={onClickPageAnimals}
              pageAnimals={pageAnimals}
              inputTextAnimals={inputTextAnimals}
              filterName={filterName}
              filterTags={filterTags}
              filterSpecies={filterSpecies}
              filterBreeds={filterBreeds}
              filterGender={filterGender}
              filterAge={filterAge}
              filterSOS={filterSOS}
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
                  animals={allAnimals}
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
                  handleChangeFirebase={handleChangeFirebase}
                  handleUpload={handleUpload}
                  url={url}
                  confirmationAdd={confirmationAdd}
                  confirmationDelete={confirmationDelete}
                  handleUploadDelete={handleUploadDelete}
                  progress={progress}
                />
              </Route>
              <Route path="/admin/gestion-articles" exact>
                <ManageArticles
                  articles={allArticles}
                  deleteArticle={deleteArticle}
                  modalAddArticleIsOpen={modalAddArticleIsOpen}
                  handleSubmitAddArticle={handleSubmitAddArticle}
                  handleChangeAddArticle={handleChangeAddArticle}
                  changeModalStateAddArticle={changeModalStateAddArticle}
                  confirmationAdd={confirmationAdd}
                  confirmationDelete={confirmationDelete}
                  categories={categories}
                  handleChangeFirebase={handleChangeFirebase}
                  handleUpload={handleUpload}
                  url={url}
                  progress={progress}
                />
              </Route>
              <Route path="/admin/gestion-animaux/:id" exact>
                <ManageAnimal
                  handleSubmitEditAnimal={handleSubmitEditAnimal}
                  animal={animals}
                  animalData={animalData}
                  handleChangeFirebase={handleChangeFirebase}
                  handleUpload={handleUpload}
                  url={url}
                  allTags={tags}
                  allBreeds={breeds}
                  confirmation={confirmationAdd}
                  handleUploadDelete={handleUploadDelete}
                  progress={progress}
                />
              </Route>
              <Route path="/admin/gestion-articles/:id" exact>
                <ManageArticle
                  articles={articles}
                  categories={categories}
                  handleSubmitEditArticle={handleSubmitEditArticle}
                  confirmation={confirmationAdd}
                  handleChangeFirebase={handleChangeFirebase}
                  handleUpload={handleUpload}
                  url={url}
                  handleUploadDelete={handleUploadDelete}
                  progress={progress}
                />
              </Route>
            </>
          )}
          {!isLogged && (
            <>
              <Route path="/admin/gestion-animaux" exact>
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
              <Route path="/admin/gestion-articles" exact>
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
              <Route path="/admin/gestion-animaux/:id" exact>
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
              <Route path="/admin/gestion-articles/:id" exact>
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
              <Route path="/articles" exact>
                <Blog
                  datas={buttonCategories === 'allCategories' ? articles : filterCategoriesArticles}
                  categories={categories}
                  filterCategories={filterCategories}
                  onClickPageArticles={onClickPageArticles}
                  pageArticles={pageArticles}
                  articlesCount={allArticles.length}
                />
              </Route>
              <Route path="/articles/:id" exact>
                <Article article={articles} />
              </Route>
            </>
          )}
          <Error404 />
        </Switch>
        )
      }
      <Route path="/TousDroitsReserves" exact>
      <Creator />
      </Route>
      <Footer/>
    </div>
  );
};

// == Export
export default App;
