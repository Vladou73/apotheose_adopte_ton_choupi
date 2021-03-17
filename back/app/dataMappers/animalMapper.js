// const Animal = require('../models/animal');
const db = require('../database');
const animalMapper = {};
const table_infos = {
    'tags': {
        'table':'animal_tag',
        'field':'tag_id'
    },
    'medias':{
        'table':'animal_media',
        'field':'media_id'
    },
    'breeds':{
        'table':'animal_breed',
        'field':'breed_id'
    }
}

// get all animals in DB
animalMapper.findAll = async(request) => {  
    
    let pagination = ` `
    if (request.query.page) {
        let page = Number(request.query.page);
        if (request.query.items){
            let itemsPerPage = Number(request.query.items)
            pagination = `LIMIT ${itemsPerPage} OFFSET ${(page - 1) * itemsPerPage}`
        } else {
            pagination = `LIMIT 10 OFFSET ${(page - 1) * 10}`
        }
    }

    const query = `
        SELECT
            a.id,
            a.name,
            TO_CHAR(a.birthdate, 'DD-MM-YYYY') birthdate,
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
        ORDER BY a.created_at DESC
        ${pagination}
    `
    const result = await db.query(query);
    // et les retourne, sous forme d'instances de Animal
    // return result.rows.map(animal => new Animal(animal));
    return result.rows;
}

animalMapper.findOne = async(id) => {  
    console.log('enter animalMapper.findOne');
    const query = `
        SELECT
            a.id,
            a.name,
            TO_CHAR(a.birthdate, 'DD-MM-YYYY') birthdate,
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
        VALUES ($1, TO_DATE($2,'DD-MM-YYYY'), $3, $4, $5)
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

    //-----------------BINDING TABLES-----------------//
    //check changes in other tables
    
    for (elements in table_infos) {
        try {
            //Check if elements have been added
            //Créer 1 liste par element ajouté à l'animal => faire une boucle et une requête par element pour l'ajouté (version dirty rapide)
            if(theAnimal[elements]) {
                console.log(`enter ${elements} processing`)
                
                //retrieve right table and field for elements treated
                let table = table_infos[elements]['table']
                let field = table_infos[elements]['field']

                //A VERIFIER : est-ce qu'il faut renvoyer les ids des liens créés dans la table ? je vois pas bien à quoi ils serviraient
                for (let element of theAnimal[elements]) {
                    let data = [theAnimal.id, element.id];
                    //insert row in animal_tag    
                    let query = `INSERT INTO ${table} (animal_id, ${field}) VALUES ($1, $2) RETURNING id;`;
                    //trigger query
                    await db.query(query, data);
                    //retrieve id of tag inserted ==> is it useful ?
                    // theAnimal.id = rows[0].id;
                }
            }
        } catch(error) {
            console.log(error);
        }
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

animalMapper.edit = async (theAnimal, otherTablesImpacted) => {
    console.log('enter animalMapper.edit');

    //-----------------TABLE animal-----------------//

    //store data from the animal in an array
    const dataAnimal = [
        theAnimal.name, //optional
        theAnimal.birthdate, //optional
        theAnimal.description, //optional
        theAnimal.gender_id,  //optional
        theAnimal.id // for the WHERE close
    ];
    //update animal data in DB
    let queryAnimal = `
        UPDATE animal SET (name, birthdate, description, gender_id) = ($1, TO_DATE($2,'DD-MM-YYYY'), $3, $4)
        WHERE id = $5
        RETURNING *;
    `;
    try {
        //trigger query
        await db.query(queryAnimal, dataAnimal);
        // let { rows } =
        // return rows[0]
    } catch(error) {
        console.log(error);
    }

    //-----------------BINDING TABLES-----------------//

    // Check changes in other tables
    for (elements in otherTablesImpacted) {
        try {
            console.log('enter '+elements+' processing')
            
            //delete rows from corresponding binding table with the animal id
            //check in const table_infos which table and which field is impacted in function of elemnts
            let table = table_infos[elements]['table']
            let field = table_infos[elements]['field']

            await db.query(`DELETE FROM ${table} WHERE animal_id = $1`, [theAnimal.id]);
            
            //Créer 1 liste par element ajouté à l'animal => faire une boucle et une requête par element pour l'ajouter (version dirty rapide)
            for (let element of theAnimal[elements]) {
                let data = [theAnimal.id, element.id];
                //insert row in table    
                let query = `INSERT INTO ${table} (animal_id, ${field}) VALUES ($1, $2) RETURNING id;`;
                //trigger query
                await db.query(query, data);
            }
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = animalMapper;