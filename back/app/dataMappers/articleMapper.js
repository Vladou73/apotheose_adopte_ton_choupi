// const Animal = require('../models/animal');
const db = require('../database');

const articleMapper = {};

// get all animals in DB
articleMapper.findAll = async() => {  
    const query = `
        SELECT
            a.id,
            a.title,
            a.content,
            TO_CHAR(a.created_at, 'YYYY-MM-DD') created_at,
            a.media_id,
            m.url as media_url,
            a.category_id,
            c.name as category_name,
            c.color as category_color
            a.creator_id as author_id,
            u.firstname as author_firstname,
            u.lastname as author_lastname,
        FROM article a
        JOIN "user" u ON u.id = a.creator_id
        LEFT JOIN media m ON m.id = a.media_id
        LEFT JOIN category c ON c.id = a.category_id
    `
    const result = await db.query(query);
    // et les retourne, sous forme d'instances de Animal
    // return result.rows.map(animal => new Animal(animal));
    return result.rows;
}


module.exports = articleMapper;