const Tag = require('../models/tag');
const db = require('../database');

const tagMapper = {}

tagMapper.findAll = async() => {
        const query = `SELECT id, name, color FROM tag ORDER BY name;`
        try {
            const result = await db.query(query);
            // et les retourne, sous forme d'instances de Breed
            return result.rows.map(tag => new Tag(tag));
            // return result.rows;
        } catch(error) {
            console.log('dataMapper error raised');
            throw new Error(error);
        }
}    

tagMapper.findOne = async(id) => {  
    const query = `SELECT id, name, color FROM tag WHERE id = $1;`
    try{
        const result = await db.query(query, [id]);
        return result.rows[0];
    } catch(error){
        console.log('dataMapper error raised');
        throw new Error(error);
    }
}

tagMapper.save = async (theTag) => {
    console.log('enter tagMapper.save');  

    //all this data must be retrieved from frontend
    const data = [
        theTag.name,
        theTag.color
    ];

    //insert tag data in DB
    let query = `
        INSERT INTO tag (name, color)
        VALUES ($1, $2)
        RETURNING tag.id;
    `;

    try {
        //trigger query
        let { rows } = await db.query(query, data);
        //retrieve id of tag inserted and assign to the tag instance 
        theTag.id = rows[0].id;
    } catch(error) {
        console.log('dataMapper error raised');
        throw new Error(error);
    }
}

tagMapper.deleteOne = async(id)=>{
    console.log('enter tagMapper.deleteOne')
    const query = `DELETE FROM tag WHERE id = $1 RETURNING *`
    try {
        const result = await db.query(query, [id]);
        return result.rows[0];
    } catch(error) {
        console.log('dataMapper error raised');
        throw new Error(error);
    }
}

tagMapper.edit = async (theTag) => {
    console.log('enter tagMapper.edit');

    //store data from the tag in an array
    const data = [
        theTag.name, //optional
        theTag.color, //optional
        theTag.id // for the WHERE close, NOT EDITABLE
    ];

    //update tag data in DB
    let query = `
        UPDATE tag SET (name, color) = ($1, $2)
        WHERE id = $3
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

module.exports = tagMapper;