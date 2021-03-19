const Category = require('../models/category');
const db = require('../database');

const categoryMapper = {}

categoryMapper.findAll = async() => {  
    const query = `SELECT id, name, color FROM category ORDER BY name;`
    try{
        const result = await db.query(query);
        // et les retourne, sous forme d'instances de Categories
        return result.rows.map(category => new Category(category));
        // return result.rows;
    }catch(error){
        console.log(error);
        return error
    }

}

categoryMapper.findOne = async(id) => {  
    const query = `SELECT id, name, color FROM category WHERE id = $1;`
    try {
        const result = await db.query(query, [id]);
        return result.rows[0];
    } catch(err){
        console.log(err)
        return err;
    }
}

categoryMapper.save = async (theCategory) => {
    console.log('enter categoryMapper.save');  

    //all this data must be retrieved from frontend
    const data = [
        theCategory.name,
        theCategory.color
    ];

    //insert category data in DB
    let query = `
        INSERT INTO category (name, color)
        VALUES ($1, $2)
        RETURNING category.id;
    `;

    try {
        //trigger query
        let { rows } = await db.query(query, data);
        //retrieve id of category inserted and assign to the category instance 
        theCategory.id = rows[0].id;
    } catch(error) {
        console.log(error);
        return error
    }
}

categoryMapper.deleteOne = async(id)=>{
    console.log('enter categoryMapper.deleteOne')
    
    const query = `DELETE FROM category WHERE id = $1 RETURNING *`
    console.log(query)
    try {
        const result = await db.query(query, [id]);
        return result.rows[0];
    } catch(error) {
        console.log(error);
        return error
    }
}

categoryMapper.edit = async(theCategory) => {
    console.log('enter categoryMapper.edit');

    //store data from the category in an array
    const data = [
        theCategory.name, //optional
        theCategory.color, //optional
        theCategory.id // for the WHERE close, NOT EDITABLE
    ];

    //update category data in DB
    let query = `
        UPDATE category SET (name, color) = ($1, $2)
        WHERE id = $3
        RETURNING *;
    `;
    try {
        //trigger query
        await db.query(query, data);
        // let { rows } =
        // return rows[0]
    } catch(error) {
        console.log(error);
        return error
    }
}



module.exports = categoryMapper;