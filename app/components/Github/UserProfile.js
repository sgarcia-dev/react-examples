var React = require('react');

var UserProfile = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		bio: React.PropTypes.object.isRequired
	},
	render: function () {
		return(
			<div>
				<h4>USER PROFILE</h4>
				<p>Username: {this.props.username}</p>
				<p>Bio: {this.props.bio.name}</p>
			</div>
		)
	}
});

module.exports = UserProfile;