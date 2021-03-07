const Species = require('../models/species');
const db = require('../database');

const speciesMapper = {
    findAll : async() => {  
        const query = `SELECT id, name FROM species;`
        const result = await db.query(query);
        // et les retourne, sous forme d'instances de Species
        return result.rows.map(species => new Species(species));
        // return result.rows;
    }    
}

module.exports = speciesMapper;