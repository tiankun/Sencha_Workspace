/**
 * Created by tiankun on 2019/4/9.
 */

Ext.define('ext_demo_001.view.main.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.FormController',
    signInCanvasBoxReady:function (container, width, height) {
        this.getView().setConfig('title','8848');
        var signInDiv = container.getEl().query('#signInCanvas')[0];
        this.signInCanvas = $(signInDiv);
        this.signInCanvas.jSignature({color: "#000", width: '100%', height: height - 5, lineWidth: 3});
        //this.emptySignImg = this.signInCanvas.jSignature('getData');
    },
    onGridAfterRender:function () {

        var map = new AMap.Map('container', {
            zoom:13,//级别
            center: [102.931334, 25.099501],//中心点坐标
            viewMode:'3D',//使用3D视图
            layers: [//使用多个图层
                new AMap.TileLayer.Satellite(),
                new AMap.TileLayer.RoadNet()
            ],
            zooms: [4,18],//设置地图级别范围
        });
        AMap.plugin('AMap.ToolBar',function(){//异步加载插件
            var toolbar = new AMap.ToolBar();
            map.addControl(toolbar);
        });
        //实时路况图层
        var trafficLayer = new AMap.TileLayer.Traffic({
            zIndex: 10
        });
        var marker = new AMap.Marker({
            position: [102.931331, 25.099502]
        });
        var onMarkerClick  =  function(e) {
            map.open(map, e.target.getPosition());//打开信息窗体
            //e.target就是被点击的Marker
        }
        map.add(marker);
        marker.on('click',onMarkerClick);//绑定click事件
        map.add(trafficLayer);//添加图层到地图
    }
});