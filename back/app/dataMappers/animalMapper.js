// const Animal = require('../models/animal');
const db = require('../database');

const animalMapper = {};

// get all animals in DB
animalMapper.findAll = async() => {  
    const result = await db.query(`
        SELECT
            a.id,
            a.name,
            a.birthdate,
            a.description,
            bs.species_id,
            bs.species_name,
            bs.breeds,
            t.tags,
            m.medias
        FROM animal a
        JOIN (
            SELECT
                animal_breed.animal_id,
                species.id as species_id,
                species.name as species_name,
                json_agg(json_build_object('id',breed.id, 'name',breed.name)) as breeds
            FROM animal_breed
            JOIN breed ON breed.id = animal_breed.breed_id
            JOIN species ON species.id = breed.species_id
            GROUP BY 1,2,3
        ) bs on bs.animal_id = a.id
        LEFT JOIN (
            SELECT
                animal_tag.animal_id,
                json_agg(json_build_object('id',tag.id, 'name',tag.name,'color',tag.color)) as tags
            FROM animal_tag
            JOIN tag ON tag.id = animal_tag.tag_id
            GROUP BY 1
        ) t ON t.animal_id = a.id
        LEFT JOIN (
            SELECT
                animal_media.animal_id,
                json_agg(json_build_object('id',media.id, 'url',media.url)) as medias
            FROM animal_media
            JOIN media ON media.id = animal_media.media_id
            GROUP BY 1
        ) m ON m.animal_id = a.id
    `);
    // et les retourne, sous forme d'instances de Animal
    // return result.rows.map(animal => new Animal(animal));
    return result.rows;
}

module.exports = animalMapper;