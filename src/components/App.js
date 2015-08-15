/* @flow weak */

"use strict";

var React = require('react');
var Title = require('react-document-title');
var RouteHandler = require('react-router').RouteHandler;
var NavBar = require('./NavBar');
var actions = require('../actions/Actions');
var store = require('../stores/ExampleStore')

var App = React.createClass({

    componentWillMount: function() {
        actions.initializeStore();
        store.addChangeListener(this._onStoreChange);
    },

    _onStoreChange: function() {
        console.log(store.getData());
    },

    render: function() {
        return (
            <Title title='My App'>
            	<div>
            		<NavBar />
	        		<RouteHandler/>
        		</div>
      		</Title>
        );
    }

});

module.exports = App;