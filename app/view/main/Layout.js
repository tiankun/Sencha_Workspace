/**
 * This view is an example list of people.
 */
Ext.define('ext_demo_001.view.main.Layout', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout',
    width: 400,
    height: 200,
    title: 'Container Panel',
    layout: 'column',
    bodyPadding: 10,
    items: [
        {
            xtype: 'datefield',
            fieldLabel: 'First Name',
            name: 'firstName',
            columnWidth: 0.5
        },
        {
            xtype: 'panel',
            title: 'Child Panel 2',
            store: store,
            height: 100,
            columnWidth: 0.5
        }
    ]
});
var store = Ext.create('Ext.data.TreeStore', {
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Child 1',
                leaf: true
            },
            {
                text: 'Child 2',
                leaf: true
            },
        ]
    }
});