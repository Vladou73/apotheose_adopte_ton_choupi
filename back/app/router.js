const { Router } = require('express');
// const csrf = require('csurf');
// const csrfProtection = csrf({cookie: true});

const animalController = require('./controllers/animalController');
const speciesController = require('./controllers/speciesController');
const breedController = require('./controllers/breedController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');
const articleController = require('./controllers/articleController');
const categoryController = require('./controllers/categoryController');
const mediaController = require('./controllers/mediaController');


//joi validation schemas are not implemented yet on frontend side
// const validate = require('./services/validator'); //middleware to use joi
// const {
//     animalPostSchema,
//     animalPutSchema,
//     articlePostSchema,
//     articlePutSchema,
//     signInSchema,
//     mediaPostSchema,
//     mediaPutSchema,
//     speciesPostSchema,
//     speciesPutSchema,
//     breedPostSchema,
//     breedPutSchema,
//     tagPostSchema,
//     tagPutSchema,
//     categoryPostSchema,
//     categoryPutSchema
// } = require('./shemas/joi'); //joi input validation schemas

const router = Router();


//CSRF TOKEN is not ready on frontend side
// router.use(csrfProtection);

// router.get('/csrf-token', (req, res) => {
//     console.log('send csrf-token');
//     res.json({ csrfToken: req.csrfToken() });
// });

// // error handler for csrf token
// router.use(function (err, req, res, next) {
//     if (err.code !== 'EBADCSRFTOKEN') return next(err)
  
//     console.log(err.code)
//   // handle CSRF token errors here
//   res.status(403)
//   res.json(err)
// })



//authentification with JWT
router.post('/admin/signIn', userController.signIn); // sign in with JWT stored in cookie
// router.post('/admin/authenticate', userController.authenticate); //verify the cookie where JWT should be stored
router.get('/admin/logout', userController.logout); //destroy cookie JWT => it is not saved anymore


router.post('/admin/addAnimal', animalController.newAnimal);
router.route('/admin/animals/:id(\\d+)')
    .get(animalController.oneAnimal)
    .delete(animalController.deleteAnimal)
    .put(animalController.editAnimal);

router.post('/admin/addArticle',articleController.newArticle);
router.route('/admin/articles/:id(\\d+)')
    .get(articleController.oneArticle)
    .delete(articleController.deleteArticle)
    .put(articleController.editArticle);

router.post('/admin/addMedia', mediaController.newMedia);
router.route('/admin/medias/:id(\\d+)')
    .get(mediaController.oneMedia)
    .delete(mediaController.deleteMedia)
    .put(mediaController.editMedia);

router.post('/admin/addTag', tagController.newTag);
router.route('/admin/tags/:id(\\d+)')
    .get(tagController.oneTag)
    .delete(tagController.deleteTag)
    .put(tagController.editTag);

router.post('/admin/addCategory', categoryController.newCategory);
router.route('/admin/categories/:id(\\d+)')
    .get(categoryController.oneCategory)
    .delete(categoryController.deleteCategory)
    .put(categoryController.editCategory);

router.post('/admin/addSpecies', speciesController.newSpecies);
router.route('/admin/species/:id(\\d+)')
    .get(speciesController.oneSpecies)
    .delete(speciesController.deleteSpecies)
    .put(speciesController.editSpecies);

router.post('/admin/addBreed', breedController.newBreed);
router.route('/admin/breeds/:id(\\d+)')
    .get(breedController.oneBreed)
    .delete(breedController.deleteBreed)
    .put(breedController.editBreed);


//animal infos
router.get('/animals', animalController.allAnimals); // route with processing of pagination parameters included
router.get('/species', speciesController.allSpecies);
router.get('/breeds', breedController.allBreeds);
router.get('/tags', tagController.allTags);

//blog infos
router.get('/categories', categoryController.allCategories);
router.get('/articles', articleController.allArticles); // route with processing of pagination parameters included

//other routes
router.get('/medias', mediaController.allMedias);
    

//ROUTE INUTILE, A SUPPRIMER
//regex data validation : id has to be a digit
// router.get('/animals/:id(\\d+)', animalController.oneAnimal);


// ici, une 404 pour l'API
router.use((_, response) => {
    response.status(404).json('404 error : endpoint not found');
});


module.exports = router;