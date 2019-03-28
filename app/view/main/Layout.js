/**
 * This view is an example list of people.
 */
Ext.define('ext_demo_001.view.main.Layout', {
    extend: 'Ext.container.Container',
    //height: 900,
    bodyPadding: 10,
    border:1,
    style: {borderColor:'#f9e6fd', borderStyle:'solid', borderWidth:'1px',backgroundColor:'#eee'},
    requires: ['Ext.layout.container.Card',
        'ext_demo_001.store.Personnel',
    ],
    layout: {
        type: 'vbox',       // Arrange child items vertically
        align: 'anchor',    // Each takes up full width
        padding: 10,
    },
    xtype:'layout',
    items: [{
        xtype: 'toolbar',
        cls: 'sbm-default-header-shadow',
        anchor:'100',
        items: [
            {
                text: 'Button',
                id: 'btn002',
                cls:'btn03'
            },
            {
                xtype: 'splitbutton',
                text : 'Split Button',
                menu:[{
                    text:'menu1'
                }, {
                        text:'menu2'
                    }]
            },
            // begin using the right-justified button container
            '->', // same as { xtype: 'tbfill' }
            {
                xtype    : 'textfield',
                name     : 'field1',
                emptyText: 'enter search term'
            },
            // add a vertical separator bar between toolbar items
            '-', // same as {xtype: 'tbseparator'} to create Ext.toolbar.Separator
            'text 1', // same as {xtype: 'tbtext', text: 'text1'} to create Ext.toolbar.TextItem
            { xtype: 'tbspacer' },// same as ' ' to create Ext.toolbar.Spacer
            'text 2',
            { xtype: 'tbspacer', width: 50 }, // add a 50px space
            'text 3'
        ]
    },{
        xtype: 'checkbox',
        boxLabel: 'Is Admin',
        reference: 'isAdmin'
    },{
        xtype: 'textfield',
        fieldLabel: 'Admin Key',
        bind: {
            disabled: '{!isAdmin.checked}',
        }
    }]
});