const middleware = function(request, response, next) {
    let token = request.headers['x-access-token'];
    if (!token) return response.status(401).send({ message: 'Invalid authentication.' });

    // TODO: token was provided, check it's real
    next();
};

module.exports = middleware;