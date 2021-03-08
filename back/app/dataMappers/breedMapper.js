const Breed = require('../models/breed');
const db = require('../database');

const breedMapper = {
    findAll : async() => {  
        const query = `SELECT id, name, species_id FROM breed`
        const result = await db.query(query);
        // et les retourne, sous forme d'instances de Breed
        return result.rows.map(breed => new Breed(breed));
        // return result.rows;
    }    
}

module.exports = breedMapper;