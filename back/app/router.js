const { Router } = require('express');
const csrf = require('csurf');
const csrfProtection = csrf({cookie: true});

const animalController = require('./controllers/animalController');
const speciesController = require('./controllers/speciesController');
const breedController = require('./controllers/breedController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');
const articleController = require('./controllers/articleController');
const categoryController = require('./controllers/categoryController');

const router = Router();
// const routerPublic = Router();
// const routerAdmin = Router();

//authentification with JWT
router.post('/admin/signIn', userController.signIn); // sign in with JWT stored in cookie
// router.post('/admin/authenticate', userController.authenticate); //verify the cookie where JWT should be stored
router.get('/admin/logout', userController.logout); //destroy cookie JWT => it is not saved anymore

router.use(csrfProtection);
router.get('/csrf-token', (req, res) => {
    console.log('send csrf-token');
    res.json({ csrfToken: req.csrfToken() });
});

router.post('/admin/addAnimal', userController.authenticate, animalController.newAnimal);
router.route('/admin/animals/:id(\\d+)')
    .get(userController.authenticate, animalController.oneAnimal)
    .delete(userController.authenticate, animalController.deleteAnimal)
    .put(userController.authenticate, animalController.editAnimal);

router.post('/admin/addArticle',userController.authenticate, articleController.newArticle);
router.route('/admin/articles/:id(\\d+)')
    .get(userController.authenticate, articleController.oneArticle)
    .delete(userController.authenticate, articleController.deleteArticle)
    .put(userController.authenticate, articleController.editArticle);


//animal infos
router.get('/animals', animalController.allAnimals);
router.get('/species', speciesController.allSpecies);
router.get('/breeds', breedController.allBreeds);
router.get('/tags', tagController.allTags);

//blog infos
router.get('/categories', categoryController.allCategories);
router.get('/articles', articleController.allArticles);


//ROUTE INUTILE, A SUPPRIMER
//regex data validation : id has to be a digit
router.get('/animals/:id(\\d+)', animalController.oneAnimal);


// ici, une 404 pour l'API
router.use((_, response) => {
    response.status(404).json('404 error : endpoint not found');
});


module.exports = router;