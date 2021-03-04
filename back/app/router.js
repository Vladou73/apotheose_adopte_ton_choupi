const { Router } = require('express');
const db = require('./database');

const router = Router();

const findAll = async () => {
    const result = await db.query(`
        SELECT
            gender.*
        FROM gender;
    `);
    return result.rows;
}

const testController = async (request, response) => {
    // console.log('Hello World');
    // response.send('hello world');
    
    const posts = await findAll();

    response.json(posts);
}

router.get('/', testController);

module.exports = router;