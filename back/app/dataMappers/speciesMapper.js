const Species = require('../models/species');
const db = require('../database');

const speciesMapper = {
    findAll : async() => {  
        const query = `SELECT id, name FROM species ORDER BY name;`
        try{
            const result = await db.query(query);
            // et les retourne, sous forme d'instances de Species
            return result.rows.map(species => new Species(species));
            // return result.rows;
        } catch(error) {
            console.log(error);
            return error
        }
    }    
}

speciesMapper.findOne = async(id) => {  
    const query = `
    SELECT 
        s.id,
        s.name,
        json_agg(json_build_object('id',b.id, 'name',b.name)) as breeds
    FROM species s
        JOIN breed b ON b.species_id = s.id
    WHERE s.id = $1
    GROUP BY s.id,s.name;`
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
        return error
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
        return error
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
        return error
    }
}

module.exports = speciesMapper;