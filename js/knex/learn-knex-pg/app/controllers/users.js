const knex = require('../db');

async function getTodosOfUser(req, res) {
    const todos = await knex('todos')
        .innerJoin('users', 'todos.user_id', 'users.id')
        .where('todos.user_id', req.params.id);

    res.send(todos);
}

module.exports = { getTodosOfUser };
