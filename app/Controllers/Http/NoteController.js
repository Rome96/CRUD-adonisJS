'use strict'

const Note = use('App/Models/Note')

class NoteController {
//------------------------------------------------------------//
	async index({view}){
		const notes = await Note.all()

		return view.render('notes.index',{
			notes: notes.toJSON()
		})
	}
//---------------------------------------------------------------//
	async add ({view}){
		return view.render('notes.add')
	}
//---------------------------------------------------------------//

	async store({request, response, view}){

		const note = new Note()
		note.title = request.input('title')
		note.body = request.input('body')
		 await note.save ()

		 return response.redirect('/notes')
	}

}

module.exports = NoteController
