const Joi = require('joi');

const animalSchema = Joi.object({
    title: Joi.string().required(),
    slug: Joi.string().required(),
    content: Joi.string().min(10).required(),
    excerpt: Joi.string().min(10).required(),
    category: Joi.string(), 
    categoryId: Joi.number().integer()
}).xor('category', 'categoryId');

module.exports = animalSchema;