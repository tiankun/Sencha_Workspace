let record_start = 0;
//分页的combobox下拉选择显示条数
combo = Ext.create('Ext.form.ComboBox', {
    name: 'pagesize',
    hiddenName: 'pagesize',
    store: new Ext.data.ArrayStore({
        fields: ['text', 'value'],
        data: [['20', 20], ['40', 40], ['60', 60], ['80', 80], ['100', 100]]
    }),
    valueField: 'value',
    displayField: 'text',
    emptyText: 20,
    width: 50
});//若要“永久性”更改全局变量itemsPerPage，此combox要放在Ext.onReady();中
//添加下拉显示条数菜单选中事件
combo.on("select", function (comboBox) {
    let pagingToolbar = Ext.getCmp('pagingbar');
    let preStore = Ext.getStore('preStore');
    pagingToolbar.pageSize = parseInt(comboBox.getValue());
    preStore.itemsPerPage = parseInt(comboBox.getValue());//更改全局变量itemsPerPage
    preStore.pageSize = itemsPerPage;//设置store的pageSize，可以将工具栏与查询的数据同步。
    preStore.loadPage(1);//显示第一页,不论你在第几页重新选择显示条数，默认都显示第一页数据，rowNumber也会自动转换成从1开始。

});
Ext.define('ext_demo_001.view.main.Tab1', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabpannel',
    requires: [
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
        //border: 1,
        /*style: {
            borderColor: '#f0f',
            borderWidth: '1px',
            borderStyle: 'solid'
        },*/
        height: 700,
        layout: 'fit',
        fullscreen: true,
        store: {
            id: 'preStore',
            type: 'per'
        },
        columns: [{
            header: "序号",
            width: 60,
            renderer: function (value, metadata, record, rowIndex) {
                return record_start + 1 + rowIndex;
            }
        },
            {
                text: 'bookName',
                dataIndex: 'bookName',
                sortable: false,  // column cannot be sorted
                flex: 1
            }, {
                text: 'description',
                dataIndex: 'description',
                flex: 1
            }, {
                text: 'author',
                dataIndex: 'author',
                flex: 1,
                hidden: false  // column is initially hidden
            }, {
                text: 'cover',
                flex: 1,
                dataIndex: 'cover',
                //formatter: 'date("Y/m/d h:s")',
            }, {
                text: 'category',
                dataIndex: 'category',
                flex: 1,
                // format the email address using a custom renderer
                /* renderer: function (value) {
                     return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
                 }*/
            }, {
                text: 'categoryId',
                flex: 1,
                dataIndex: 'categoryId',
                //formatter: 'date("Y/m/d h:s")',
            }, {
                text: 'price',
                flex: 1,
                dataIndex: 'price',
                //formatter: 'date("Y/m/d h:s")',
            }, {
                text: 'online',
                flex: 1,
                dataIndex: 'online',
                //formatter: 'date("Y/m/d h:s")',
            }, {
                text: 'createTime',
                flex: 1,
                dataIndex: 'createTime',
                formatter: 'date("Y/m/d h:s")',
            },],
        dockedItems: [
            {
                xtype: 'pagingtoolbar',
                id: 'pagingbar',
                dock: 'bottom',
                displayInfo: true,
                displayMsg: '第 {0} - {1} 条 共 {2} 条',
                emptyMsg: "没有记录",
                prevText: "上一页",
                nextText: "下一页",
                refreshText: "刷新",
                lastText: "最后页",
                firstText: "第一页",
                beforePageText: "第",
                afterPageText: "共{0}页",
                items: ['-', '每页显示', combo, '条']//此处是将创建的combobox添加到工具栏中
            }
        ],
    }, {
        title: 'About Sencha',
        iconCls: 'x-fa fa-info-circle'
    }]
});
