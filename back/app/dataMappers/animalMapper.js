// const Animal = require('../models/animal');
const db = require('../database');

const animalMapper = {};

// get all animals in DB
animalMapper.findAll = async() => {
    // const result = await db.query(`SELECT 'HELLO WORLD';`);
    
    const result = await db.query(`
        SELECT
            a.id,
            a.name,
            a.birthdate,
            a.description,
            ab.breed_id,
            b.name as breed_name,
            b.species_id,
            s.name as species_name,
            at.tag_id,
            t.name as tag_name,
            t.color as tag_color,
            am.media_id,
            m.url as media_url
        FROM animal a
            JOIN animal_breed ab ON ab.animal_id = a.id
            JOIN breed b ON b.id = ab.breed_id
            JOIN species s ON s.id = b.species_id
            LEFT JOIN animal_tag at ON at.animal_id = a.id
            LEFT JOIN tag t ON t.id = at.tag_id
            LEFT JOIN animal_media am ON am.animal_id = a.id
            LEFT JOIN media m ON m.id = am.media_id;
    `);
    // et les retourne, sous forme d'instances de Animal
    // return result.rows.map(animal => new Animal(animal));
    return result.rows;
}

module.exports = animalMapper;