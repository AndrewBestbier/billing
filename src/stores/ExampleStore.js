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
    statement: {}
};


var ExampleStore = assign({}, EventEmitter.prototype, {

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

ExampleStore.dispatchToken = Dispatcher.register(function(payload) {
    if (payload.action === 'INIT_STORE') {
        _store.callCharges = payload.data.callCharges;
        _store.package = payload.data.package;
        _store.skyStore = payload.data.skyStore;
        _store.statement = payload.data.statement;

        ExampleStore.emitChange(CHANGE_EVENT);
    }

});

module.exports = ExampleStore;