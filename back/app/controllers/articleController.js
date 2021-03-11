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
    console.log('enter articleController.deleteArticle')
    const articleId = Number(request.params.id);
    if (isNaN(articleId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }
    try {
        const article = await articleMapper.deleteOne(articleId);
        response.json(article);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }
}



articleController.editArticle = async(request, response)=> {
    console.log('enter articleController.editArticle')
    const articleId = Number(request.params.id);
    if (isNaN(articleId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }

    //get the article data from DB
    let article = {}
    try {
        article = await articleMapper.findOne(articleId);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }

    //Check to keep only properties accepted from client side
    const acceptedProperties = ['title','content','pin','category_id','media_id']
    for (prop in request.body){
            //change to article properties the updated values
        if (acceptedProperties.includes(prop)){
            article[prop] = request.body[prop];
        };
    }
    
    // update DB with article edited properties
    try {
        await articleMapper.edit(article);
        response.json(article);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }


    //WIP  ==> TO DO LATER
    //create new article instance with all the data
    // const editedArticle = new Article(article);



}

module.exports = articleController;