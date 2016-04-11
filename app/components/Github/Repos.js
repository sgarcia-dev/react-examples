var React = require('react');

var Repos = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		repos: React.PropTypes.array.isRequired
	},
	render: function () {
		return(
			<div>
				<h4>Repos</h4>
				List: {this.props.repos}
			</div>
		)
	}
});

module.exports = Repos;