const knex = require('knex');

const config = require('../knex.js');

// Make sure to ask Jonathan about this integration
module.exports = knex(config.development);