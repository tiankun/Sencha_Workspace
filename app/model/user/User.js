Ext.define('ext_demo_001.model.user.User', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'auto' },
        { name: 'email', type: 'auto' }

    ]
});
