jest.dontMock('../BillingStore');
jest.dontMock('object-assign')

var jsonData = {
    "statement": {
        "generated": "2015-01-11",
        "due": "2015-01-25",
        "period": {
            "from": "2015-01-26",
            "to": "2015-02-25"
        }
    },
    "total": 136.03,
    "package": {
        "subscriptions": [{
            "type": "tv",
            "name": "Variety with Movies HD",
            "cost": 50
        }, {
            "type": "talk",
            "name": "Sky Talk Anytime",
            "cost": 5
        }, {
            "type": "broadband",
            "name": "Fibre Unlimited",
            "cost": 16.4
        }],
        "total": 71.4
    },
    "callCharges": {
        "calls": [{
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "07716393769",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "02074351359",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "02074351359",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "02074351359",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "02074351359",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "02074351359",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "02074351359",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "02074351359",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "02074351359",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "02074351359",
            "duration": "00:23:03",
            "cost": 2.13
        }, {
            "called": "02074351359",
            "duration": "00:23:03",
            "cost": 2.13
        }],
        "total": 59.64
    },
    "skyStore": {
        "rentals": [{
            "title": "50 Shades of Grey",
            "cost": 4.99
        }],
        "buyAndKeep": [{
            "title": "That's what she said",
            "cost": 9.99
        }, {
            "title": "Brokeback mountain",
            "cost": 9.99
        }],
        "total": 24.97
    }
}

describe('BillingStore', function() {

    var BillingStore;
    var Dispatcher;
    var callback;

    beforeEach(function() {
        AppDispatcher = require('../../dispatcher/dispatcher');
        BillingStore = require('../BillingStore');
        callback = AppDispatcher.register.mock.calls[0][0];
    });

    it('The store initializes has 5 keys', function() {
        var all = BillingStore.getData()
        var keys = Object.keys(all);
        expect(keys.length).toBe(5);
    });

    it('The store initializes with no data', function() {
        var BillingStoreData = BillingStore.getData();

        expect(BillingStoreData.callCharges).toEqual({});
        expect(BillingStoreData.package).toEqual({});
        expect(BillingStoreData.skyStore).toEqual({});
        expect(BillingStoreData.statement).toEqual({});
        expect(BillingStoreData.total).toEqual('');
    });

    it('Registers a callback with the dispatcher', function() {
        expect(AppDispatcher.register.mock.calls.length).toBe(1);
    });

    it('The store is populated with the correct data when initialised', function() {

        var payload = {
            action: 'INIT_STORE',
            data: jsonData
        }

        callback(payload);
        var BillingStoreData = BillingStore.getData()
        expect(BillingStoreData.callCharges.calls.length).toEqual(28) //28
        expect(BillingStoreData.package.subscriptions.length).toEqual(3) //3
        expect(BillingStoreData.skyStore).toNotEqual({}) //does not equal {}
        expect(BillingStoreData.statement).toNotEqual({})
        expect(BillingStoreData.total).toEqual(136.03) //136.03
    });
});