/**
 * Created by tiankun on 2019/4/11.
 */
Ext.define('ext_demo_001.view.main.Anchor', {
    extend: 'Ext.Container',
    xtype: 'myanchor',
    layout: 'card',
    controller:'FormController',
    html:'<div id="container" style="width: 800px;height: 400px"></div>',
    listeners: {
        afterrender: 'onGridAfterRender'
    }
});