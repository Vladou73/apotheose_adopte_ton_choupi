const Category = require('../models/category');
const db = require('../database');

const categoryMapper = {
    findAll : async() => {  
        const query = `SELECT id, name, color FROM category;`
        const result = await db.query(query);
        // et les retourne, sous forme d'instances de Categories
        return result.rows.map(category => new Category(category));
        // return result.rows;
    }
}

module.exports = categoryMapper;