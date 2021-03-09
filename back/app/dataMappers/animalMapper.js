// const Animal = require('../models/animal');
const db = require('../database');

const animalMapper = {};

// get all animals in DB
animalMapper.findAll = async() => {  
    const query = `
        SELECT
            a.id,
            a.name,
            TO_CHAR(a.birthdate, 'YYYY-MM-DD') birthdate,
            a.description,
            a.gender_id,
            g.name as gender_name,
            bs.species_id,
            bs.species_name,
            bs.breeds,
            t.tags,
            m.medias
        FROM animal a
        JOIN gender g ON g.id = a.gender_id
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
    `
    const result = await db.query(query);
    // et les retourne, sous forme d'instances de Animal
    // return result.rows.map(animal => new Animal(animal));
    return result.rows;
}

animalMapper.findOne = async(id) => {  
    const query = `
        SELECT
            a.id,
            a.name,
            TO_CHAR(a.birthdate, 'YYYY-MM-DD') birthdate,
            a.description,
            a.gender_id,
            g.name as gender_name,
            bs.species_id,
            bs.species_name,
            bs.breeds,
            t.tags,
            m.medias
        FROM animal a
        JOIN gender g ON g.id = a.gender_id
        JOIN (
            SELECT
                animal_breed.animal_id,
                species.id as species_id,
                species.name as species_name,
                json_agg(json_build_object('id',breed.id, 'name',breed.name)) as breeds
            FROM animal_breed
            JOIN breed ON breed.id = animal_breed.breed_id
            JOIN species ON species.id = breed.species_id
            WHERE animal_breed.animal_id = $1
            GROUP BY 1,2,3
        ) bs on bs.animal_id = a.id
        LEFT JOIN (
            SELECT
                animal_tag.animal_id,
                json_agg(json_build_object('id',tag.id, 'name',tag.name,'color',tag.color)) as tags
            FROM animal_tag
            JOIN tag ON tag.id = animal_tag.tag_id
            WHERE animal_tag.animal_id = $1
            GROUP BY 1
        ) t ON t.animal_id = a.id
        LEFT JOIN (
            SELECT
                animal_media.animal_id,
                json_agg(json_build_object('id',media.id, 'url',media.url)) as medias
            FROM animal_media
            JOIN media ON media.id = animal_media.media_id
            WHERE animal_media.animal_id = $1
            GROUP BY 1
        ) m ON m.animal_id = a.id`
    
    const result = await db.query(query, [id]);

    // if no results throw error
    if (!result.rows[0]) {
        throw new Error("No animal found with id " + id);
    }

    // et les retourne, sous forme d'instances de Animal
    // return result.rows.map(animal => new Animal(animal));
    return result.rows[0];
}

// /**
//  * sauvegarde un post et le retourne avec son id
//  * @param {Animal} theAnimal 
//  */
animalMapper.save = async (theAnimal) => {
    console.log('enter animalMapper.save');  
    
    //-----------------TABLE animal-----------------//

    //all this data must be retrieved from frontend
    const dataAnimal = [
        theAnimal.name,
        theAnimal.birthdate,
        theAnimal.description,
        theAnimal.creator_id,
        theAnimal.gender_id
    ];

    //insert animal data in DB
    let queryAnimal = `
        INSERT INTO animal (name, birthdate, description, creator_id, gender_id)
        VALUES ($1, $2::date, $3, $4, $5)
        RETURNING animal.id;
    `;

    try {
        //trigger query
        let { rows } = await db.query(queryAnimal, dataAnimal);
        //retrieve id of animal inserted and assign to the animal instance 
        theAnimal.id = rows[0].id;
    } catch(error) {
        console.log(error);
    }


    //-----------------TABLE animal_tag-----------------//

    try {
        //Check if tags have been added
        //Créer 1 liste par tag ajouté à l'animal => faire une boucle et une requête par tag pour l'ajouté (version dirty rapide)
        if(theAnimal.tags) {
            console.log('enter tags processing')
            //A VERIFIER : est-ce qu'il faut renvoyer les ids des liens créés dans la table ? je vois pas bien à quoi ils serviraient
            for (let tag of theAnimal.tags) {
                let dataTag = [theAnimal.id, tag.id];
                //insert row in animal_tag    
                let query = `INSERT INTO animal_tag (animal_id, tag_id) VALUES ($1, $2) RETURNING id;`;
                //trigger query
                let { rows } = await db.query(query, dataTag);
                //retrieve id of tag inserted ==> is it useful ?
                // theAnimal.id = rows[0].id;
            }
        } else {
            console.log('no tags')
        }
    } catch(error) {
        console.log(error);
    }

    //-----------------TABLE animal_breed-----------------//

    try {
        if(theAnimal.breeds) {
            console.log('enter breeds processing')
            //A VERIFIER : est-ce qu'il faut renvoyer les ids des liens créés dans la table ? je vois pas bien à quoi ils serviraient
            for (let breed of theAnimal.breeds) {
                let data = [theAnimal.id, breed.id];
                //insert row in animal_tag    
                let query = `INSERT INTO animal_breed (animal_id, breed_id) VALUES ($1, $2) RETURNING id;`;
                //trigger query
                let { rows } = await db.query(query, data);
                //retrieve id of tag inserted ==> is it useful ?
                // theAnimal.id = rows[0].id;
            }
        } else {
            console.log('no breeds')
        }
    
    } catch(error) {
        console.log(error);
    }

    //-----------------TABLE animal_media-----------------//

    try {
        if(theAnimal.medias) {
            console.log('enter medias processing')
            //A VERIFIER : est-ce qu'il faut renvoyer les ids des liens créés dans la table ? je vois pas bien à quoi ils serviraient
            for (let media of theAnimal.medias) {
                let data = [theAnimal.id, media.id];
                //insert row in animal_media    
                let query = `INSERT INTO animal_media (animal_id, media_id) VALUES ($1, $2) RETURNING id;`;
                //trigger query
                let { rows } = await db.query(query, data);
                //retrieve id of tag inserted ==> is it useful ?
                // theAnimal.id = rows[0].id;
            }
        } else {
            console.log('no medias')
        }

    } catch(error) {
        console.log(error);
    }

}

animalMapper.deleteOne = async(id)=>{
    console.log('enter animalMapper.deleteOne')
    const query = `
        DELETE FROM animal
        WHERE id = $1
        RETURNING *
    `
    try {
        const result = await db.query(query, [id]);
        return result.rows[0];
    } catch(error) {
        console.log(error);
    }

}


module.exports = animalMapper;