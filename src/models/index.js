const config = require('../../config')

const knex = require('knex')

const database = knex({
  client: 'mysql2',
  connection: config.database
})

module.exports = database;