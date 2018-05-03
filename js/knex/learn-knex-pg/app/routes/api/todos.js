const router = require('express').Router();

const { todos } = require('../../controllers');

router.route('/')
    .get(todos.getAll)
    .post(todos.postOne);

router.route('/:id')
    .delete(todos.deleteOne)
    .get(todos.getOne)
    .put(todos.putOne)

module.exports = router;
