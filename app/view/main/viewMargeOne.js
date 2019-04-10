/**
 * Created by gaoyu on 2019/4/2.
 */
var store = Ext.create('Ext.data.Store', {
    fields: ['name', 'email', 'phone'],
    data: [
        {'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224"},
        {'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234"},
        {'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244"},
        {'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254"}
    ]
});
// noinspection UnknownClassInspection
Ext.define('ext_demo_001.view.main.viewMargeOne', {
    extend: 'Ext.form.Panel',
    xtype: 'viewMargeOne',
    autoScroll: true,
    ui: 'light',
    controller: 'FormController',
    minHeight: 400,
    layout: {
        type: 'hbox',
        align: 'stretch', //拉伸使其充满整个父容器
    },
    defaults: {
        margin: '5px',
        border: true,
        style: {
            'border': '1px solid #eee'
        }
    },
    items: [
        {
            xtype: 'grid',
            store: this.store,
            dockedItems: {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'datefield',
                        fieldLabel: '时间',
                        emptyText: '请选择开始时间',
                        editable: false,
                        labelWidth: 60,
                        format: 'Y-m-d ',
                        reference: 'beginTime'
                    }
                ]
            },
            columns: [
                {text: 'Name', dataIndex: 'name', width: 200},
                {text: 'Email', dataIndex: 'email', width: 250},
                {text: 'Phone', dataIndex: 'phone', width: 120}
            ],
            layout: 'fit',
            flex: 9
        },
        {
            xtype: 'fieldset',
            title: '手写签名',
            buttonAlign: 'left',
            margin: '10 20 20 20',
            instructions: 'Tell us all about yourself',
            items: [
                {
                    xtype: 'container',
                    height: 200,
                    layout: 'fit',
                    html: '<div id="signInCanvas" style="width:100%;height:100%;border: 1px dashed #999;"></div>',
                    listeners: {
                        boxready: 'signInCanvasBoxReady'
                    }
                }
            ],
            flex: 11
        }

    ]
});