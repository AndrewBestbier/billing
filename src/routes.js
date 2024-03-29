"use strict";

var React = require('react');
var Route = require('react-router').Route;
var NotFoundRoute = require('react-router').NotFoundRoute;
var DefaultRoute = require('react-router').DefaultRoute;
var Redirect = require('react-router').Redirect;

var Routes = (
    <Route handler={require('./components/App')}>
    	<DefaultRoute name="Home" handler={require('./components/Home')}/>
    	<NotFoundRoute handler={require('./components/NotFound')}/>
  	</Route>
);

module.exports = Routes;