var React = require('react'),
	ReactDom = require('react-dom'),
	Router = require('react-router').Router,
	hashHistory = require('react-router').hashHistory,
	routes = require('./config/routes');


ReactDom.render(
	<Router history={hashHistory}>{routes}</Router>,
	document.getElementById('app')
);