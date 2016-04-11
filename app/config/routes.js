var React = require('react'),
	Router = require('react-router'),
	Main = require('../components/Main'),
	Home = require('../components/Home'),
	Route = Router.Route,
	IndexRoute = Router.IndexRoute;

module.exports = (
	<Route path="/" component={Main}>
		<IndexRoute component={Home} />
	</Route>
);