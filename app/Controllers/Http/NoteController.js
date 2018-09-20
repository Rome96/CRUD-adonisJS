'use strict'

const Note = use('App/Models/Note')

class NoteController {
	async index({view}){
		const notes = await Note.all()

		return view.render('notes.index',{
			notes: notes.toJSON()
		})
	}
}

module.exports = NoteController
