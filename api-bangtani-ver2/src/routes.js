const {
    addUserHandler,
    getAllUsersHandler,
    getUserByIdHandler,
    editUserByIdHandler,
    deleteUserByIdHandler,
  } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/users',
        handler: addUserHandler,
    },
    {
        method: 'GET',
        path: '/users',
        handler: getAllUsersHandler,
    },
    {
        method: 'GET',
        path: '/users/{id}',
        handler: getUserByIdHandler,
    },
    {
        method: 'PUT',
        path: '/users/{id}',
        handler: editUserByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/users/{id}',
        handler: deleteUserByIdHandler,
    },
];

module.exports = routes;