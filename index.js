'use strict'

const fp = require('fastify-plugin')
var knex = require('knex')

function fastifyKnex (fastify, options, next) {
  if (!fastify.knex) {
    const con = knex(options)
    fastify.decorate('knex', con)
  }

  next()
}

module.exports = fp(fastifyKnex, '>=0.13.1')
