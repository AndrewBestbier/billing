"use strict";

var React = require('react');

var NavBar = React.createClass({

    render: function() {

        return (
            <div className="navbar navbar-default navbar-fixed-top">
        	    <div className="container">
        	        <div className="navbar-header">
                        <a className="navbar-brand" rel="home" href="#" title="Buy Sell Rent Everyting">
                            <img src="../../../static/img/sky-logo-redesign.png" />
                        </a>
        	        </div>
        	    </div>
        	</div>
        );
    }

});

module.exports = NavBar;