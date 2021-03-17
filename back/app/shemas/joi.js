const Joi = require('joi')
    .extend(require('@joi/date'));

const animalPostSchema = Joi.object({
    name: Joi.string().min(2).required(),
    birthdate: Joi.date().format('DD-MM-YYYY').required(),
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

module.exports = animalPostSchema;