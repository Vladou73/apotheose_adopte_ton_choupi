const Tag = require('../models/tag');
const db = require('../database');

const tagMapper = {
    findAll : async() => {
        const query = `SELECT id, name, color FROM tag`
        const result = await db.query(query);
        // et les retourne, sous forme d'instances de Breed
        return result.rows.map(tag => new Tag(tag));
        // return result.rows;
    }    
}

module.exports = tagMapper;