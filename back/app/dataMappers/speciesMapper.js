const Species = require('../models/species');
const db = require('../database');

const speciesMapper = {
    findAll : async() => {  
        const query = `SELECT id, name FROM species ORDER BY name;`
        const result = await db.query(query);
        // et les retourne, sous forme d'instances de Species
        return result.rows.map(species => new Species(species));
        // return result.rows;
    }    
}

speciesMapper.findOne = async(id) => {  
    const query = `SELECT id, name FROM species WHERE id = $1;`
    try {
        const result = await db.query(query, [id]);
        return result.rows[0];
    } catch(err){
        console.log(err)
        return err;
    }
}

speciesMapper.save = async (theSpecies) => {
    console.log('enter speciesMapper.save');  

    //all this data must be retrieved from frontend
    const data = [
        theSpecies.name
    ];

    //insert species data in DB
    let query = `
        INSERT INTO species (name)
        VALUES ($1)
        RETURNING species.id;
    `;

    try {
        //trigger query
        let { rows } = await db.query(query, data);
        //retrieve id of species inserted and assign to the species instance 
        theSpecies.id = rows[0].id;
    } catch(error) {
        console.log(error);
    }
}

speciesMapper.deleteOne = async(id)=>{
    console.log('enter speciesMapper.deleteOne')
    const query = `DELETE FROM species WHERE id = $1 RETURNING *;`
    try {
        const result = await db.query(query, [id]);
        return result.rows[0];
    } catch(error) {
        console.log(error);
    }
}

speciesMapper.edit = async(theSpecies) => {
    console.log('enter speciesMapper.edit');

    //store data from the species in an array
    const data = [
        theSpecies.name, //optional
        theSpecies.id // for the WHERE close, NOT EDITABLE
    ];

    //update species data in DB
    let query = `
        UPDATE species SET name = $1
        WHERE id = $2
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


module.exports = speciesMapper;