Ext.define('ext_demo_001.store.Per', {
    extend: 'Ext.data.Store',
    alias: 'store.per',
    autoLoad: true,
    fields: [
        'firstName', 'lastName', 'officeLocation','phoneNumber','email','createDate',
    ],
    proxy: {
        url:'https://www.easy-mock.com/mock/5c80dfe729559949e66c79ac/example/mock',
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});

