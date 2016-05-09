import React from 'react';

class Note extends React.Component {
	render () {
		let title = this.props.title || null;
		let titleDom = <h4 className="no-margin no-padding note-content title">{title}</h4>;
		let content = this.props.content;
		return <div className="note card low">
			{title ? titleDom : null}
			<p className="no-margin no-padding note-content content">{content}</p>
		</div>
	}
}

Note.propTypes = {
	content: React.PropTypes.string.isRequired
};

export default Note;