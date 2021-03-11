const { response } = require('express');
const articleMapper = require('../dataMappers/articleMapper');
const Article = require('../models/article');


const articleController = {}

articleController.allArticles = async (_, response) => {
    console.log('enter articleController.allArticles')
    const articles = await articleMapper.findAll();
    response.json(articles)
}

articleController.oneArticle = async (request, response) => {
    console.log('enter articleController.oneArticle')
    try {
        const article = await articleMapper.findOne(request.params.id);
        response.json(article);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }
}

articleController.newArticle = async (request, response) => {
    console.log('enter articleController.newArticle')
    // create instance of Article directly from data sent through payload
    const newArticle = new Article(request.body);
    
    try {
        await articleMapper.save(newArticle);
        response.json(newArticle);
    } catch (err) {
        response.status(403).json(err.message);
    }
}

articleController.deleteArticle = async(request, response)=> {
}
articleController.editArticle = async(request, response)=> {
}

module.exports = articleController;