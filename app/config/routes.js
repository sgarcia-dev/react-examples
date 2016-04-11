var React = require('react'),
	Router = require('react-router'),
	Main = require('../components/Main'),
	Home = require('../components/Home'),
	Profile = require('../components/Profile'),
	Route = Router.Route,
	IndexRoute = Router.IndexRoute;

module.exports = (
	<Route path="/" component={Main}>
		<Route path="profile/:username" component={Profile} />
		<IndexRoute component={Home} />
	</Route>
);