'use strict'

const Schema = use('Schema')

class NoteSchema extends Schema {
  up () {
    this.create('notes', (table) => {
      table.increments()
      table.string('title', 30).notNullable()
      table.string('body', 300).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('notes')
  }
}

module.exports = NoteSchema
