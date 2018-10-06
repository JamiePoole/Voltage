const UserModel = require('../models/user');

const controller = {
    list: function(request, response) {
        response.status(200).send('LIST OF USERS');
    },
    post: function(request, response) {
        let body = request.body;
        body.rawHeaders = request.rawHeaders;

        for (let key in body) {
            if (typeof body[key] === 'object') {
                for (let nested in body[key]) {
                    body[key][nested] = request.sanitize(body[key][nested]);
                }
            }
            else {
                body[key] = request.sanitize(body[key]);
            }
        }

        let user = new UserModel(body);
        user.save(function(error, item) {
            if (error) return response.status(500).json(error);

            return response.status(201).json(item);
        });

        // TODO: Get Geolocation via IP
    },
    get: function(request, response) {
        response.status(200).send('GET user');
    },
    put: function(request, response) {
        response.status(200).send('PUT user');
    },
    patch: function(request, response) {
        response.status(200).send('PATCH user');
    },
    delete: function(request, response) {
        response.status(200).send('DELETE user');
    }
};

module.exports = controller;