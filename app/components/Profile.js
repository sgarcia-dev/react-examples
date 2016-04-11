var React = require('react'),
	Repos = require('./Github/Repos.js'),
	UserProfile = require('./Github/UserProfile.js'),
	Notes = require('./Notes/Notes.js'),
	ReactFireMixin = require('reactfire'),
	Firebase = require('firebase');

var Profile = React.createClass({
	mixins: [ReactFireMixin],
	getInitialState: function() {
		return {
			notes: ['lorem', 'ipsum'],
			bio: {
				name: 'Sergei Garcia'
			},
			repos: ['a', 'b', 'c']
		}
	},
	componentDidMount: function() {
		this.ref = new Firebase('https://github-notetaker-sgarcia.firebaseio.com/');
		// ReactFire Method
		var childRef = this.ref.child(this.props.params.username);
		// ReactFire Method
		this.bindAsArray(childRef, 'notes');
	},
	componentWillUnmount: function() {
		// ReactFire Method
		this.unbind('notes');
	},
	handleAddNote: function(newNote) {
		this.ref
			.child(this.props.params.username)
			.child(this.state.notes.length)
			.set(newNote);
	},
	render: function() {
		console.log(this.props);
		return(
			<div className="row">
				<div className="col-md-4">
					<UserProfile username={this.props.params.username} bio={this.state.bio} />
				</div>
				<div className="col-md-4">
					<Repos repos={this.state.repos} username={this.props.params.username} />
				</div>
				<div className="col-md-4">
					<Notes
						notes={this.state.notes}
						username={this.props.params.username}
						addNote={this.handleAddNote}
					/>
				</div>
			</div>
		)
	}
});

module.exports = Profile;