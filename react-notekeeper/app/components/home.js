import React from 'react';
import Noteslist from './notelist';
import Navbar from './navbar';
import Editbar from './editbar';

class Home extends React.Component {
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

export default Home;