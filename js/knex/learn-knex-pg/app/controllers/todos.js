const knex = require('../db');

async function deleteOne(req, res) {
    await knex('todos')
        .delete()
        .where('id', req.params.id);

    const todos = await knex('todos').select();

    res.json(todos);
}

async function getAll(req, res) {
    const todos = await knex('todos').select();

    res.json(todos);
}

async function getOne(req, res) {
    const todo = await knex('todos')
        .select()
        .where('id', req.params.id);

    res.json(todo);
}

async function postOne(req, res) {
    await knex('todos').insert(req.body);

    const todos = await knex('todos').select();

    res.json(todos);
}

async function putOne(req, res) {
    await knex('todos')
        .update(req.body)
        .where('id', req.params.id);

    const todos = await knex('todos').select();

    res.json(todos);
}

module.exports = { deleteOne, getAll, getOne, postOne, putOne };
