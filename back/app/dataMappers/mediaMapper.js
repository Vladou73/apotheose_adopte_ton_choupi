// const media = require('../models/media');
const db = require('../database');

const mediaMapper = {};

// get all medias in DB
mediaMapper.findAll = async() => {  
    const query = `
        SELECT
            id, 
            type,
            url
        FROM media
        ORDER BY type, media;
    `
    try {
        const result = await db.query(query);
        // et les retourne, sous forme d'instances de media
        // return result.rows.map(media => new media(media));
        return result.rows;
    } catch(error) {
        console.log(error);
        return error
    }
}

mediaMapper.findOne = async(id) => {  
    const query = `
        SELECT
            id, 
            type,
            url
        FROM media
        WHERE id = $1
    `
    try{
        const result = await db.query(query, [id]);
        return result.rows[0];
    } catch(err){
        console.log(err)
        return err;
    }
}

mediaMapper.save = async (theMedia) => {
    console.log('enter mediaMapper.save');  

    //all this data must be retrieved from frontend
    const data = [
        theMedia.type,
        theMedia.url
    ];

    //insert media data in DB
    let query = `
        INSERT INTO media (type, url)
        VALUES ($1, $2)
        RETURNING media.id;
    `;

    try {
        //trigger query
        let { rows } = await db.query(query, data);
        //retrieve id of media inserted and assign to the media instance 
        theMedia.id = rows[0].id;
    } catch(error) {
        console.log(error);
        return error
    }
}

mediaMapper.deleteOne = async(id)=>{
    console.log('enter mediaMapper.deleteOne')
    const query = `DELETE FROM media WHERE id = $1 RETURNING *`
    try {
        const result = await db.query(query, [id]);
        return result.rows[0];
    } catch(error) {
        console.log(error);
        return error
    }
}

mediaMapper.edit = async (theMedia) => {
    console.log('enter mediaMapper.edit');

    //store data from the media in an array
    const data = [
        theMedia.type, //optional
        theMedia.url, //optional
        theMedia.id // for the WHERE close, NOT EDITABLE
    ];

    //update media data in DB
    let query = `
        UPDATE media SET (type, url) = ($1, $2)
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


module.exports = mediaMapper;