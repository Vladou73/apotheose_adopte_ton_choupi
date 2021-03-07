const { response } = require('express');
const articleMapper = require('../dataMappers/articleMapper');

const articleController = {}

articleController.allArticles = async (_, response) => {
    console.log('enter articleController.allArticles')
    const articles = await articleMapper.findAll();
    response.json(articles)
}

module.exports = articleController;