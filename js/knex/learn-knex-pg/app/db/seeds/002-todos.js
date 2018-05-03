exports.seed = function(knex, Promise) {
    return knex('todos')
        .del()
        .then(function() {
            return knex('todos').insert([
                { title: 'Go to the gym', user_id: 1 },
                { title: 'Go to sleep', user_id: 1 },
                { title: 'Go to the mall', user_id: 2 },
                { title: 'Go buy a jeep', user_id: 2 },
                { title: 'From the windows to the walls', user_id: 3 },
                { title: 'skeetskeetskeetskeetskeet', user_id: 3 }
            ]);
        });
};
