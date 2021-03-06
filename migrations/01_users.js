// ------------------------------------
// Migration
// ------------------------------------

exports.up = (knex) =>
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.bigInteger('created_at').defaultTo(new Date().getTime())
    table.bigInteger('updated_at').defaultTo(new Date().getTime())
  })

exports.down = (knex) => knex.schema.dropTable('users')

// ------------------------------------
// Seed
// ------------------------------------

exports.seed = (knex) =>
  knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          name: 'John Doe',
          email: 'john@test.com',
          created_at: new Date().getTime(),
          updated_at: new Date().getTime(),
        },
      ]),
    )
