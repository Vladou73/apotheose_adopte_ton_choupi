const Breed = require('../models/breed');
const db = require('../database');

const breedMapper = {
    findAll : async() => {  
        const query = `SELECT id, name, species_id FROM breed ORDER BY species_id, name;`
        const result = await db.query(query);
        // et les retourne, sous forme d'instances de Breed
        return result.rows.map(breed => new Breed(breed));
        // return result.rows;
    }    
}

breedMapper.findOne = async(id) => {  
    const query = `SELECT id, name, species_id FROM breed WHERE id = $1;`
    try{
        const result = await db.query(query, [id]);
        return result.rows[0];
    } catch(err){
        console.log(err)
        return err;
    }
}

breedMapper.save = async (theBreed) => {
    console.log('enter breedMapper.save');  

    //all this data must be retrieved from frontend
    const data = [
        theBreed.name,
        theBreed.species_id
    ];

    //insert breed data in DB
    let query = `
        INSERT INTO breed (name, species_id)
        VALUES ($1, $2)
        RETURNING breed.id;
    `;

    try {
        //trigger query
        let { rows } = await db.query(query, data);
        //retrieve id of breed inserted and assign to the breed instance 
        theBreed.id = rows[0].id;
    } catch(error) {
        console.log(error);
    }
}

breedMapper.deleteOne = async(id)=>{
    console.log('enter breedMapper.deleteOne')
    const query = `DELETE FROM breed WHERE id = $1 RETURNING *`
    try {
        const result = await db.query(query, [id]);
        return result.rows[0];
    } catch(error) {
        console.log(error);
    }
}

breedMapper.edit = async (theBreed) => {
    console.log('enter breedMapper.edit');

    //store data from the breed in an array
    const data = [
        theBreed.name, //optional
        theBreed.species_id, //optional
        theBreed.id // for the WHERE close, NOT EDITABLE
    ];

    //update breed data in DB
    let query = `
        UPDATE breed SET (name, species_id) = ($1, $2)
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
    }
}

module.exports = breedMapper;