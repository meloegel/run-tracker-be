
exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('id')
            tbl.string('username').notNullable()
            tbl.string('password').notNullable()
            tbl.string('email')
        })
        .createTable('runTimes', tbl => {
            tbl.increments('id')
            tbl.time('runTime').notNullable()
            tbl.integer('distance').notNullable()
            tbl.boolean('publish')
            tbl.timestamp("timePosted").notNullable().defaultTo(knex.fn.now());
            tbl.time('pace')
            tbl.string('description')
            tbl.integer('userId').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('runTimes')
};
