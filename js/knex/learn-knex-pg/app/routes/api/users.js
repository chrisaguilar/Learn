const router = require('express').Router();
const { users } = require('../../controllers');

router.get('/:id/todos', users.getTodosOfUser);

module.exports = router;
