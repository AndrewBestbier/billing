/* @flow weak */

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

        	        <div className="navbar-collapse collapse" id="navbar-main">
        	            <ul className="nav navbar-nav">
        	            	<li>
        	              		<a href="../help/">Help</a>
        	            	</li>
        	            	<li>
        	              		<a href="http://news.bootswatch.com">Blog</a>
        	            	</li>
        	            </ul>
        	        </div>

        	    </div>
        	</div>
        );
    }

});

module.exports = NavBar;