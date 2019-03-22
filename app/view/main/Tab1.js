/**
 * This view is an example list of people.
 */
Ext.define('ext_demo_001.view.main.Tab1', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabpannel',
    tbar: [
        {
            xtype: 'textfield',
            labelWidth: 120,
            width: 260,
            emptyText: '请输入关键字',
            reference: 'key',
            name: 'key'
        },
        {
            xtype: 'button',
            text: '搜索',
            cls: 'btn-primary',
            iconCls: 'x-fa fa-search icon-color-white',
            listeners: {
                click: 'searchUserAddress'
            }
        },
        '->',
        {
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            cls: 'btn-primary',
            text: '新建',
            reference: 'UserAddressAddBtn',
            listeners: {
                click: 'addUserAddress'
            }
        }
    ],
    items: [{
        title: 'Employee Directory',
        iconCls: 'x-fa fa-users',
        xtype: 'grid',
        store: {
            data: [{
                "firstName": "Jean",
                "lastName": "Grey",
                "officeLocation": "Lawrence, KS",
                "phoneNumber": "(372) 792-6728"
            }, {
                "firstName": "Phillip",
                "lastName": "Fry",
                "officeLocation": "Lawrence, KS",
                "phoneNumber": "(318) 224-8644"
            }, {
                "firstName": "Peter",
                "lastName": "Quill",
                "officeLocation": "Redwood City, CA",
                "phoneNumber": "(718) 480-8560"
            }]
        },
        columns: [{
            text: 'First Name',
            dataIndex: 'firstName',
            flex: 1
        }, {
            text: 'Last Name',
            dataIndex: 'lastName',
            flex: 1
        }, {
            text: 'Phone Number',
            dataIndex: 'phoneNumber',
            flex: 1
        }]
    },{
        title: 'About Sencha',
        iconCls: 'x-fa fa-info-circle'
    }]

});
