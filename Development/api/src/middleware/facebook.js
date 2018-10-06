const parser = require('../utilities/header-parser');

const middleware = function(request, response, next) {
    let header = parser(request.headers);

    // From Facebook Camera
    if (header.isValid && header.isFacebook) {
        Object.assign(request.body, header.agentObject);
        request.body.test = 'false';
        next();
    }
    // From AR Studio / Player
    else if (header.isValid && header.isTesting) {
        request.body.test = 'true';
        next();
    }
    else {
        return response.status(401).send({ message: 'Invalid request.' });
    }
};

module.exports = middleware;