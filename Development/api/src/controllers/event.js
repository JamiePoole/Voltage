const controller = {
    list: function(request, response) {
        response.status(200).send('Hello, world!');
    },
    post: function(request, response) {
        response.status(200).send(request.headers);
    },
    get: function(request, response) {
        response.status(200).send('get');
    },
    put: function(request, response) {
        response.status(200).send('put');
    },
    patch: function(request, response) {
        response.status(200).send('patch');
    },
    delete: function(request, response) {
        console.log('DELETE!!');
        response.status(200).send('delete');
    }
};

module.exports = controller;