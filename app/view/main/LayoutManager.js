
var treestore = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: "detention", leaf: true },
            { text: "homework", expanded: true, children: [
                    { text: "book report", leaf: true },
                    { text: "alegrbra", leaf: true}
                ] },
            { text: "buy lottery tickets", leaf: true }
        ]
    }
});
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
            xtype: 'treepanel',
            title:'树',
            store: treestore,
            minHeight: 400,
            collapsible:true,
            rootVisible: true,
            border: 1,
            tbar:[{
                text:'展开',
                handler:function(){
                    this.expandAll();
                }
            },'-',{
                text:'折叠',
                handler:function(){
                    this.collapseAll();
                    this.root.expand();
                }
            }],
            buttons: [
                { text: 'Button 79' ,
                handler:function () {
                    Ext.create('Ext.window.Window', {
                        title: 'Hello',
                        height: 200,
                        modal: true,
                        width: 400,
                        layout: 'fit',
                        items: {  // Let's put an empty grid in just to illustrate fit layout
                            xtype: 'grid',
                            border: false,
                            // One header just for show. There's no data
                            columns: [{ header: 'World' }],
                            store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
                        }
                    }).show();
                }}
            ],
            bbar:[
                { xtype: 'button', text: 'Button 1' },
                { xtype: 'button', text: 'Button 2' },
            ],
            items: [
                {
                    xtype:'grid',
                    title:'grid',
                    minHeight: '100px',
                    items:[
                        {
                            html:'<div>4567777</div>'
                        }
                    ]

                }
            ]

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