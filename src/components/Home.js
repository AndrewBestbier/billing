"use strict";

var React = require('react');
var Title = require('react-document-title');
var store = require('../stores/BillingStore');
var TabbedArea = require('react-bootstrap').TabbedArea;
var TabPane = require('react-bootstrap').TabPane;
var Panel = require('react-bootstrap').Panel;

//Created Tab Panes
var PackageTabPane = require('./TabPanes/PackageTabPane');
var CallChargesTabPane = require('./TabPanes/CallChargesTabPane');
var SkyStoreTabPane = require('./TabPanes/SkyStoreTabPane');

var Home = React.createClass({

    getInitialState: function() {
        return {
            subscriptions: [],
            packageTotal: 0,
            calls: [],
            callChargesTotal: 0,
            buyAndKeep: [],
            rentals: [],
            skyStoreTotal: 0,
            statement: '',
            from: '',
            to: '',
            billTotal: 0
        };
    },

    componentWillMount: function() {
        store.addChangeListener(this._onStoreChange);
    },

    componentWillUnmount: function() {
        store.removeChangeListener(this._onStoreChange);
    },

    _onStoreChange: function() {
        var billingDataObject = store.getData();

        this.setState({
            subscriptions: billingDataObject.package.subscriptions,
            packageTotal: billingDataObject.package.total,
            calls: billingDataObject.callCharges.calls,
            callChargesTotal: billingDataObject.callCharges.total,
            buyAndKeep: billingDataObject.skyStore.buyAndKeep,
            rentals: billingDataObject.skyStore.rentals,
            skyStoreTotal: billingDataObject.skyStore.total,
            statement: billingDataObject.statement,
            from: billingDataObject.statement.period.from,
            to: billingDataObject.statement.period.to,
            billTotal: billingDataObject.total
        })
    },

    render: function() {

        var divStyle = {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
        }

        return (
            <Title title='Home'>
                <div style={divStyle}>
                    <Panel>
                        <h4 className="title">Bill Overview</h4>

                        <div className='col-md-4 col-md-offset-3'>
                            <h6>Andrew Bestbier</h6>
                            <h6>17 Silwood Road Rondebosch</h6>
                            <h6>Cape Town South Africa</h6>
                            <h6>071 885 2803</h6>
                        </div>

                        <div className='col-md-4'>
                            <h6><b>Bill Date: </b>{this.state.statement.generated}</h6>
                            <h6><b>Billing Period: </b>{this.state.from+" to "+this.state.to}</h6>
                            <h6 ><b>Due Date: </b>{this.state.statement.due}</h6>
                            <h6><b>Balance Due: </b>£{this.state.billTotal}</h6>
                        </div>
                        
                    </Panel>
                    <Panel>
                        <h4 className="title">Bill Breakdown</h4>
                        <TabbedArea defaultActiveKey={1}>
                            <TabPane eventKey={1} tab={'Package'+' (£'+this.state.packageTotal+')'}>
                                <PackageTabPane subscriptions={this.state.subscriptions}/>
                            </TabPane>
                            <TabPane eventKey={2} tab={'Call Charges'+' (£'+this.state.callChargesTotal+')'}>
                                <CallChargesTabPane calls={this.state.calls} />
                            </TabPane>
                            <TabPane eventKey={3} tab={'Sky Stores'+' (£'+this.state.skyStoreTotal+')'}>
                                <SkyStoreTabPane buyAndKeep={this.state.buyAndKeep} rentals={this.state.rentals}/>
                            </TabPane>
                        </TabbedArea>
                    </Panel>      
                </div>
          </Title>
        );
    }
});

module.exports = Home;