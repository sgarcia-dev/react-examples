import './components/app.scss';

import React from 'react';
import Noteslist from './components/notelist';
import Navbar from './components/navbar';
import Editbar from './components/editbar';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [
				{
					title: 'Sample note from app state',
					content: 'sample note content goes here'
				}
			]
		}
	}
	createNote(note) {
		let _notes = this.state.notes;
		_notes.push(note);
		this.setState({notes: _notes });
	}
	render() {
		return <div className="fill-parent">
			<Navbar />
			<Noteslist notes={this.state.notes} />
			<Editbar addNote={this.createNote.bind(this)} />
		</div>
	}
}

export default App;