import React from 'react';
import ReactDom from 'react-dom';
import {Router} from 'react-router';
import {hashHistory} from 'react-router';
import routes from './config/routes';

ReactDom.render(
	<Router history={hashHistory}>{routes}</Router>,
	document.getElementById('app')
);