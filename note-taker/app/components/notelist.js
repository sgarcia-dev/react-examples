import React from 'react';
import Note from './note';

class Noteslist extends React.Component {
	componentWillReceiveProps(newProps) {
		this.setState({
			notes: newProps.notes
		});
	}
	render() {
		let notes = this.props.notes.map((note, index) =>
			<Note title={note.title} content={note.content} key={index}></Note>
		);

		return <div className="note-container fill-parent">
			<div className="container">
				{notes}
			</div>
		</div>
	}
}

Noteslist.propTypes = {
	notes: React.PropTypes.array.isRequired
};

export default Noteslist;