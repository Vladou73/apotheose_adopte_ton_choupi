const { Router } = require('express');
const animalController = require('./controllers/animalController');


const router = Router();


router.get('/animals', animalController.allAnimals);




// ici, une 404 pour l'API
router.use((request, response) => {
    response.status(404).json('No such endpoint');
});



// const db = require('./database');

// const findAll = async () => {
//     const result = await db.query(`
//         SELECT
//             gender.*
//         FROM gender;
//     `);
//     return result.rows;
// }

// const testController = async (request, response) => {
//     // console.log('Hello World');
//     // response.send('hello world');
    
//     const posts = await findAll();

//     response.json(posts);
// }

// router.get('/', testController);

module.exports = router;