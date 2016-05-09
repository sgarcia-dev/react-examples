import React from 'react';

class EditBar extends React.Component {
	handleNewNote() {
		var newNote = {
			content: this.note.value
		};
		this.note.value = '';
		this.props.addNote(newNote);
	}
	noteRef(ref) {
		this.note = ref;
	}
	onEditKeyPress(e) {
		if (e.key === 'Enter') {
			this.handleNewNote();
		}
	}
	render() {
		return <div className="edit-bar">
			<input ref={this.noteRef.bind(this)}
				   onKeyPress={this.onEditKeyPress.bind(this)}
				   className="form-control edit-bar-input"
				   placeholder="Insert your note here" type="text" />
			<div className="e-bar-icon">
				<span onClick={this.handleNewNote.bind(this)}
					  className="glyphicon glyphicon-pencil icon icon-edit"></span>
			</div>
			<div className="e-bar-icon">
				<span onClick={this.handleNewNote.bind(this)}
					  className="glyphicon glyphicon-fullscreen icon icon-edit"></span>
			</div>
		</div>
	}
}

EditBar.propTypes = {
	addNote: React.PropTypes.func.isRequired
};

export default EditBar;