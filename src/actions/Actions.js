/* @flow weak */

"use strict";

var Dispatcher = require('../dispatcher/dispatcher');
require('isomorphic-fetch');

var Actions = {

    initializeStore: function() {
        fetch('https://still-scrubland-9880.herokuapp.com/bill.json')
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                Dispatcher.dispatch({
                    action: 'INIT_STORE',
                    data: data
                });
            });
    }
};

module.exports = Actions;