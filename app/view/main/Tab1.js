var record_start = 0;
Ext.define('ext_demo_001.view.main.Tab1', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabpannel',
    requires:[
        'ext_demo_001.store.Per',
    ],
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
        border: 1,
        style: {
            borderColor: '#f0f',
            borderWidth: '1px',
            borderStyle: 'solid'
        },
        height: 700,
        layout: 'fit',
        fullscreen: true,
        store: {
            type:'per'
        },
        columns: [{
            header　:　"序号",
            width　:　60,
            renderer:function(value,metadata,record,rowIndex){
                return　record_start　+　1　+　rowIndex;
            }
        },
            {
                text: 'First Name',
                dataIndex: 'firstName',
                sortable: false,  // column cannot be sorted
                flex: 1
            }, {
                text: 'Last Name',
                dataIndex: 'lastName',
                flex: 1
            }, {
                text: 'Phone Number',
                dataIndex: 'phoneNumber',
                flex: 1,
                hidden: false  // column is initially hidden
            }, {
                text: 'createDate',
                flex: 1,
                dataIndex: 'createDate',
                formatter: 'date("Y/m/d h:s")',
            }, {
                text: 'Email Address',
                dataIndex: 'email',
                flex: 1,
                // format the email address using a custom renderer
                renderer: function (value) {
                    return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
                }
            }],
        dockedItems: [
            {
                xtype: 'pagingtoolbar',
                dock: 'bottom',
                displayInfo: true,
                //pageSize: store.pageSize,
                displayMsg: '当前记录 {0} - {1} 条 共 {2} 条记录',
                emptyMsg: "No results to display",
                prevText: "上一页",
                nextText: "下一页",
                refreshText: "刷新",
                lastText: "最后页",
                firstText: "第一页",
                beforePageText: "当前页",
                afterPageText: "共{0}页"
            }
        ],
    }, {
        title: 'About Sencha',
        iconCls: 'x-fa fa-info-circle'
    }]
});
