/**
 * This view is an example list of people.
 */

Ext.define('ext_demo_001.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    requires: [
        'ext_demo_001.store.Personnel',
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },
    plugins: [
        {
        ptype: 'rowexpander',
        rowBodyTpl: new Ext.XTemplate(

            '<p><b>问题图片:</p>'),
    }],

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected',
        onExtended :'onEd'
    }
});

