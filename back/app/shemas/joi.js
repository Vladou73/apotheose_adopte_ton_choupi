const Joi = require('joi')
    .extend(require('@joi/date'));

const joiSchemas = {}

joiSchemas.animalPostSchema = Joi.object({
    name: Joi.string().min(2).required(),
    birthdate: Joi.date().format(['YYYY-MM-DD', 'DD-MM-YYYY']).required(),
    description: Joi.string().min(2).required(),
    creator_id: Joi.number().integer().required(),
    gender_id: Joi.number().integer().required(), 
    medias: Joi.array().items(
        Joi.object({
            id:Joi.number().integer(),
            url:Joi.string(),
            type:Joi.string()
        }).and('url','type').xor('id','url').max(2)
    ).min(1),
    breeds: Joi.array().items(Joi.object({id:Joi.number().integer().required()}).length(1)).min(1),
    tags: Joi.array().items(Joi.object({id:Joi.number().integer().required()}).length(1)).min(1)
}).min(5).max(8);

joiSchemas.animalPutSchema = Joi.object({
    name: Joi.string().min(2),
    birthdate: Joi.date().format(['YYYY-MM-DD', 'DD-MM-YYYY']),
    description: Joi.string().min(2),
    creator_id: Joi.number().integer(),
    gender_id: Joi.number().integer(), 
    medias: Joi.array().items(
        Joi.object({
            id:Joi.number().integer(),
            url:Joi.string(),
            type:Joi.string()
        }).and('url','type').xor('id','url').max(2)
    ).min(1),
    breeds: Joi.array().items(Joi.object({id:Joi.number().integer().required()}).length(1)).min(1),
    tags: Joi.array().items(Joi.object({id:Joi.number().integer().required()}).length(1)).min(1)
}).min(1).max(8);

joiSchemas.articlePostSchema = Joi.object({
    title: Joi.string().min(2).required(),
    content: Joi.string().min(2).required(),
    pin: Joi.boolean().required(),
    author_id: Joi.number().integer().required(),
    category_id: Joi.number().integer().required(), 
    media_id: Joi.number().integer(),
    media_url: Joi.string().min(2)
}).xor('media_id','media_url').length(6);

joiSchemas.articlePutSchema = Joi.object({
    title: Joi.string().min(2),
    content: Joi.string().min(2),
    pin: Joi.boolean(),
    author_id: Joi.number().integer(),
    category_id: Joi.number().integer(), 
    media_id: Joi.number().integer(),
    media_url: Joi.string().min(2)
}).xor('media_id','media_url').min(1).max(6);

joiSchemas.signInSchema = Joi.object({
    username: Joi.string(),
    password: Joi.string()
}).length(2);

joiSchemas.mediaPostSchema = Joi.object({
    url: Joi.string().required(),
    type: Joi.string().required(),
}).length(2);

joiSchemas.mediaPutSchema = Joi.object({
    url: Joi.string(),
    type: Joi.string(),
}).min(1).max(2);

joiSchemas.speciesPostSchema = Joi.object({
    name: Joi.string().required()
}).length(1);

joiSchemas.speciesPutSchema = Joi.object({
    name: Joi.string().required()
}).length(1);

joiSchemas.breedPostSchema = Joi.object({
    name: Joi.string().required(),
    species_id: Joi.number().integer().required(),
}).length(2);

joiSchemas.breedPutSchema = Joi.object({
    name: Joi.string(),
    species_id: Joi.number().integer(),
}).min(1).max(2);

joiSchemas.tagPostSchema = Joi.object({
    name: Joi.string().required(),
    color: Joi.string().pattern(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, 'rgba_color_format').required(),
}).length(2);

joiSchemas.tagPutSchema = Joi.object({
    name: Joi.string(),
    color: Joi.string().pattern(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, 'rgba_color_format'),
}).min(1).max(2);

joiSchemas.categoryPostSchema = Joi.object({
    name: Joi.string().required(),
    color: Joi.string().pattern(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, 'rgba_color_format').required(),
}).length(2);

joiSchemas.categoryPutSchema = Joi.object({
    name: Joi.string(),
    color: Joi.string().pattern(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, 'rgba_color_format'),
}).min(1).max(2);


module.exports = joiSchemas;