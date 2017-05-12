
exports.up = function(knex, Promise) {
    return Promise.all([

        knex.schema.createTable('usersdetails', function(table) {
            table.increments('id').primary();
            table.string('username');
            table.string('refId');
            table.timestamps();
        }),

    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('usersdetails')
    ]);
};