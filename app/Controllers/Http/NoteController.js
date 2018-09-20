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
//-----------------------------------------------------------------//
	async detail({params, view}){
		const note = await Note.find(params.id)
		return view.render('notes.detail', {note})
	}
//--------------------------------------------------------------//
	async edit({params, view}){
		const note = await Note.find(params.id)
		return view.render('notes.edit', {note})
	}
//------------------------------------------------------------//

	async update({params, request, response}){
		const note = await Note.find(params.id)
		note.title = request.input('title')
		note.body = request.input('body')

		await note.save()

		return response.redirect('/notes')
	}
//-----------------------------------------------------------------------//

	async destroy({params, response}){
		const note = await Note.find(params.id)

		await note.delete()

		return response.redirect('/notes')
	}
//-----------------------------------------------------------------------------//

}

module.exports = NoteController
