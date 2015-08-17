"use strict";

var React = require('react');
var Griddle = require('griddle-react');

var SkyStoreTabPane = React.createClass({

    render: function() {

        var griddleMetaData = [{
            "columnName": "title",
            "displayName": "Title"
        }, {
            "columnName": "cost",
            "visible": true,
            "displayName": "Cost (£)"
        }]

        return (
            <div>
                <h6>Buy and Keep:</h6>
                <Griddle columnMetadata={griddleMetaData} useGriddleStyles={false} columns={["title", "cost"]} results={this.props.buyAndKeep} />
                <h6>Rentals:</h6>
                <Griddle columnMetadata={griddleMetaData} useGriddleStyles={false} columns={["title", "cost"]} results={this.props.rentals} />
        	</div>
        );
    }

});

module.exports = SkyStoreTabPane;