// const Article = require('../models/article');
const db = require('../database');

const articleMapper = {};

// get all articles in DB
articleMapper.findAll = async(request) => {  
    
    let pagination = ` `
    if (request.query.page) {
        let page = Number(request.query.page);
        if (request.query.items){
            let itemsPerPage = Number(request.query.items)
            pagination = `LIMIT ${itemsPerPage} OFFSET ${(page - 1) * itemsPerPage}`
        } else {
            pagination = `LIMIT 10 OFFSET ${(page - 1) * 10}`
        }
    }
    
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
            a.pin,
            a.author_id,
            u.firstname as author_firstname,
            u.lastname as author_lastname
        FROM article a
        JOIN "user" u ON u.id = a.author_id
        LEFT JOIN media m ON m.id = a.media_id
        LEFT JOIN category c ON c.id = a.category_id
        ORDER BY a.created_at DESC
        ${pagination}
    `
    try {
        const result = await db.query(query);
        // et les retourne, sous forme d'instances de Article
        // return result.rows.map(article => new Article(article));
        return result.rows;
    } catch(error) {
        console.log('dataMapper error raised');
        throw new Error(error);
    }
}

articleMapper.findOne = async(id) => {  
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
            a.pin,
            u.firstname as author_firstname,
            u.lastname as author_lastname
        FROM article a
        JOIN "user" u ON u.id = a.author_id
        LEFT JOIN media m ON m.id = a.media_id
        LEFT JOIN category c ON c.id = a.category_id
        WHERE a.id = $1
    `
    try{
        const result = await db.query(query, [id]);
        return result.rows[0];
    } catch(error){
        console.log('dataMapper error raised');
        throw new Error(error);
    }

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
        console.log('dataMapper error raised');
        throw new Error(error);
    }
}

articleMapper.deleteOne = async(id)=>{
    console.log('enter articleMapper.deleteOne')
    const query = `DELETE FROM article WHERE id = $1 RETURNING *`
    try {
        const result = await db.query(query, [id]);
        return result.rows[0];
    } catch(error) {
        console.log('dataMapper error raised');
        throw new Error(error);
    }
}

articleMapper.edit = async (theArticle) => {
    console.log('enter articleMapper.edit');

    //store data from the article in an array
    const data = [
        theArticle.title, //optional
        theArticle.content, //optional
        theArticle.pin, //optional
        theArticle.author_id, //NOT EDITABLE
        theArticle.category_id, //optional
        theArticle.media_id, //optional
        theArticle.id // for the WHERE close, NOT EDITABLE
    ];

    //update article data in DB
    let query = `
        UPDATE article SET (title, content, pin, author_id, category_id, media_id) = ($1, $2, $3, $4, $5, $6)
        WHERE id = $7
        RETURNING *;
    `;
    try {
        //trigger query
        await db.query(query, data);
        // let { rows } =
        // return rows[0]
    } catch(error) {
        console.log('dataMapper error raised');
        throw new Error(error);
    }
}




module.exports = articleMapper;