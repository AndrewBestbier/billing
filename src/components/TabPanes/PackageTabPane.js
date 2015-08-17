"use strict";

var React = require('react');
var Griddle = require('griddle-react');

var PackageTabPane = React.createClass({

    render: function() {

        var griddleMetaData = [{
            "columnName": "type",
            "visible": true,
            "displayName": "Type"
        }, {
            "columnName": "name",
            "visible": true,
            "displayName": "Package Name"
        }, {
            "columnName": "cost",
            "visible": true,
            "displayName": "Cost (£)"
        }]

        return (
            <div>
                <h6>Subscriptions:</h6>
                <Griddle columnMetadata={griddleMetaData} useGriddleStyles={false} columns={["type", "name", "cost"]} results={this.props.subscriptions} />
        	</div>
        );
    }

});

module.exports = PackageTabPane;