const { response } = require('express');
const userService = require('../services/userService');

userController = {
    signIn: (request, response, next) => {
        console.log('entered userController.signIn');
        userService.signIn(request.body)
            .then((user) => {
                //send cookie containing JWT
                response.cookie('jsonWebToken', user.token, { httpOnly: true });
                response.json(user);
            })
            .catch(next);
    },
    authenticate : (request, response, next) => {
        console.log('entered userController.authenticate');
        userService.authenticate(request)
            // .then(next())
            .then(decoded => response.json(decoded))
            .catch((err)=>{
                return response.json(err);
            });
        // next();
    },
    logout : (_, response, next) => {
        console.log('entered userController.logout');
        response.clearCookie("jsonWebToken");
        response.json('cookie JWT cleared !');
    }
}

module.exports = userController;
