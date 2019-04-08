/**
 * Created by gaoyu on 2019/4/2.
 */
Ext.define('ext_demo_001.view.main.viewMargeOne', {
    extend: 'Ext.panel.Panel',
    xtype:'viewMargeOne',
    autoScroll:true,
    minHeight:400,
    layout: {
        type: 'hbox',
        align: 'stretch' //拉伸使其充满整个父容器
    },
    defaults: {
        margin: '5px',
        border: true
    },
    items: [
        {
            //xtype:'deviceProportionChart',
            html:'456456564',
            flex:9
        },
        {
            //xtype: 'deviceProportionGrid',
            html:'345780-=87',
            flex:11
        }

    ]
});