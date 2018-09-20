'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {import('@adonisjs/framework/src/Route/Manager'} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('notes', 'NoteController.index')

Route.get('notes/add', 'NoteController.add')
Route.post('notes', 'NoteController.store')

Route.get('notes/:id', 'NoteController.detail')

Route.get('notes/edit/:id', 'NoteController.edit')
Route.put('notes/:id', 'NoteController.update')

Route.delete('notes/:id', 'NoteController.destroy')

//

Route
  .get('users/:id', 'UserController.show')
  .middleware('auth')

Route.post('login', 'UserController.login')