Ext.define('ext_demo_001.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    onLoginClick: function () {
        localStorage.setItem('TutorialLoggedIn', true);
        this.getView().destroy();
        Ext.create({
            xtype: 'app-main',
            renderTo: Ext.getBody(),
        });
        //Ext.Msg.alert('提示','登录成功');
       var  toolTip = Ext.create('Ext.tip.ToolTip',{
           title : 'Tool - Tip Title',
           closable : true,
           width: 200,
           height:100,
           html : 'This is a basic toolTip',
       });
        toolTip.show();
    }
});