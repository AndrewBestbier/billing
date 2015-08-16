/* @flow weak */
/*global fetch*/

"use strict";

var React = require('react');
var Title = require('react-document-title');
var Link = require('react-router').Link;
var store = require('../stores/ExampleStore');

var TabbedArea = require('react-bootstrap').TabbedArea;
var TabPane = require('react-bootstrap').TabPane;
var Panel = require('react-bootstrap').Panel;
var Griddle = require('griddle-react');

var Home = React.createClass({


    getInitialState: function() {
        return {
            billingDataObject: {},
            subscriptions: [],
        };
    },

    componentWillMount: function() {
        store.addChangeListener(this._onStoreChange);
    },

    componentWillUnmount: function() {
        store.removeChangeListener(this._onStoreChange);
    },

    _onStoreChange: function() {
        var billingDataObject = store.getData()

        this.setState({
            subscriptions: billingDataObject.package.subscriptions
        })
    },

    render: function() {

        var divStyle = {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
        }

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
            <Title title='Home'>
                <div style={divStyle}>
                    <Panel>Bill Summary</Panel>
                    <Panel>
                        <TabbedArea defaultActiveKey={1}>
                            <TabPane eventKey={1} tab='Package'><Griddle columnMetadata={griddleMetaData} useGriddleStyles={false} columns={["type", "name", "cost"]} results={this.state.subscriptions} /></TabPane>
                            <TabPane eventKey={2} tab='Call Charges'>Call Charges</TabPane>
                            <TabPane eventKey={3} tab='Sky Stores'>Sky Store</TabPane>
                        </TabbedArea>
                    </Panel>      
                </div>
          </Title>
        );
    }

});

module.exports = Home;