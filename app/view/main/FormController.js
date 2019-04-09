/**
 * Created by tiankun on 2019/4/9.
 */

Ext.define('ext_demo_001.view.main.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.FormController',
    signInCanvasBoxReady:function (container, width, height) {
        var signInDiv = container.getEl().query('#signInCanvas')[0];
        this.signInCanvas = $(signInDiv);
        this.signInCanvas.jSignature({color: "#000", width: '100%', height: height - 5, lineWidth: 3});
        //this.emptySignImg = this.signInCanvas.jSignature('getData');
    }
});