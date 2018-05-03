exports.seed = function(knex, Promise) {
    return knex('users')
        .del()
        .then(function() {
            return knex('users').insert([
                { name: 'Some Guy', email: 'test1@test.com' },
                { name: 'Some Girl', email: 'test2@test.com' },
                { name: 'Someone Else', email: 'test3@test.com' }
            ]);
        });
};
