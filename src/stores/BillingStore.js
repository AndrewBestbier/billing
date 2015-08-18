/* @flow weak */

"use strict";

var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

// Data structures
var _store = {
    callCharges: {},
    package: {},
    skyStore: {},
    statement: {},
    total: ''
};


var BillingStore = assign({}, EventEmitter.prototype, {

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getData: function() {
        return _store
    }
});

BillingStore.dispatchToken = Dispatcher.register(function(payload) {

    //INIT_STORE is when the action is called when the app initially starts.
    //This does an ajax call and populates the store

    if (payload.action === 'INIT_STORE') {
        _store.callCharges = payload.data.callCharges;
        _store.package = payload.data.package;
        _store.skyStore = payload.data.skyStore;
        _store.statement = payload.data.statement;
        _store.total = payload.data.total;

        BillingStore.emitChange(CHANGE_EVENT);
    }

});

module.exports = BillingStore;