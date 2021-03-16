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


const router = Router();
// const routerPublic = Router();
// const routerAdmin = Router();


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

    
router.post('/admin/addMedia', mediaController.newMedia);
router.route('/admin/medias/:id(\\d+)')
    .get(mediaController.oneMedia)
    .delete(mediaController.deleteMedia)
    .put(mediaController.editMedia);


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
router.get('/animals/:id(\\d+)', animalController.oneAnimal);


// ici, une 404 pour l'API
router.use((_, response) => {
    response.status(404).json('404 error : endpoint not found');
});


module.exports = router;