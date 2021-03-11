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
            c.color as category_color,
            a.author_id,
            u.firstname as author_firstname,
            u.lastname as author_lastname
        FROM article a
        JOIN "user" u ON u.id = a.author_id
        LEFT JOIN media m ON m.id = a.media_id
        LEFT JOIN category c ON c.id = a.category_id
    `
    const result = await db.query(query);
    // et les retourne, sous forme d'instances de Animal
    // return result.rows.map(animal => new Animal(animal));
    return result.rows;
}

articleMapper.save = async (theArticle) => {
    console.log('enter articleMapper.save');  

    //all this data must be retrieved from frontend
    const data = [
        theArticle.title,
        theArticle.content,
        theArticle.pin,
        theArticle.author_id,
        theArticle.category_id,
        theArticle.media_id
    ];

    //insert article data in DB
    let query = `
        INSERT INTO article (title, content, pin, author_id, category_id, media_id)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING article.id;
    `;

    try {
        //trigger query
        let { rows } = await db.query(query, data);
        //retrieve id of article inserted and assign to the article instance 
        theArticle.id = rows[0].id;
    } catch(error) {
        console.log(error);
    }
}






module.exports = articleMapper;