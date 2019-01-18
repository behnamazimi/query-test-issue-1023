'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JobOfferSchema extends Schema {
  up () {
    this.create('job_offers', (table) => {
      table.increments()
      table.integer('job_id').unsigned().notNullable()
      table.foreign('job_id').references('id').inTable('jobs').onDelete('cascade')
      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('job_offers')
  }
}

module.exports = JobOfferSchema
