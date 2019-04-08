Ext.define('ext_demo_001.view.main.LayoutManager', {
    extend: 'Ext.panel.Panel',
    autoScroll:true,
    xtype: 'layoutManager',
    layout: {
        type: 'vbox',
        align: 'stretch' //拉伸使其充满整个父容器
    },
    items: [
        {
            xtype: 'viewMargeOne',
        },
        {
            //xtype: 'viewMargeTwo',
            html:'456'
        },
        {
            //xtype: 'viewMargeThree',
            html:'789'
        },
        {
            //xtype: 'viewMargeFour',
            html:'1023'
        }
    ]
});