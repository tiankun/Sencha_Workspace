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
        Ext.Msg.alert('提示','登录成功');
    }
});