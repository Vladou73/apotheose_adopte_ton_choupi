const errorController = {
    notFound : (request, response) => {
        response.status(404).json({
            error: 'page not found!'
        });
    },
    errorHandler: (error, request, response, next) => {
        console.trace(error);
        console.log(error.message);
        response.status(500).json({
            error: error.message
        });
    }
}
module.exports = errorController;