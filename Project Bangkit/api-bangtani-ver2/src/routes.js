const {
    addUserHandler,
    checkLoginHandler,
    editUserHandler,
  } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/register',
        handler: addUserHandler,
    },
    {
        method: 'POST',
        path: '/login',
        handler: checkLoginHandler,
    },
    {
        method: 'POST',
        path: '/edituser',
        handler: editUserHandler,
    },
];

module.exports = routes;