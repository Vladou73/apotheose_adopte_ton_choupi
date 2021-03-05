const { Router } = require('express');
const animalController = require('./controllers/animalController');
const userController = require('./controllers/userController');

const router = Router();
// const routerPublic = Router();
// const routerAdmin = Router();

// const jwt = require('./authentification/jwt');
// use JWT auth to secure the api
// app.use(jwt());

router.post('/admin', userController.signIn);
router.post('/admin/manageAnimals', userController.authenticate, animalController.allAnimals);


router.get('/animals', animalController.allAnimals);

//regex data validation : id has to be a digit
router.get('/animals/:id(\\d+)', animalController.oneAnimal);


// ici, une 404 pour l'API
router.use((request, response) => {
    response.status(404).json('No such endpoint');
});


module.exports = router;