const User = require('../models/user');

const middleware = function(request, response, next) {
    let userId = request.sanitize(request.params['userId']);

    if (!userId) return response.status(400).send({ message: 'User required.' });
    if (!userId.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)) return response.status(400).send({ message: 'Invalid user.' });

    User.countDocuments({ uuid: userId }, function(error, count) {
        if (error) return response.status(500).send({ message: 'Error retrieving user.' });

        if (count < 1) return response.status(404).send({ message: 'User not found.' });
        
        next();
    });
};

module.exports = middleware;