"use strict";

var React = require('react');
var Griddle = require('griddle-react');

var CallChargesTabPane = React.createClass({

    render: function() {

        var griddleMetaData = [{
            "columnName": "called",
            "visible": true,
            "displayName": "Number Called"
        }, {
            "columnName": "cost",
            "visible": true,
            "displayName": "Call Cost (£)"
        }, {
            "columnName": "duration",
            "visible": true,
            "displayName": "Call Duration"
        }]

        return (
            <div>
                <h6>Calls:</h6>
                <Griddle columnMetadata={griddleMetaData} useGriddleStyles={false} columns={["called", "duration", "cost"]} results={this.props.calls} />
            </div>
        );
    }

});

module.exports = CallChargesTabPane;