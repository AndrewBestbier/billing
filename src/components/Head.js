"use strict";

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var Head = React.createClass({

    displayName: 'Head',

    // The head component ONLY gets rendered server-side
    mixins: [PureRenderMixin],

    render: function() {
        return (
            <head>
                <meta charSet="utf-8" />
                <title>{this.props.title}</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="mobile-web-app-capable" content="yes"/>
                <link href='/static/normalize.css' rel='stylesheet' />
                <link href='/static/bootstrap.css' rel='stylesheet' />
                <link href='/static/main.css' rel='stylesheet' />
            </head>
        );
    }
});

module.exports = Head;