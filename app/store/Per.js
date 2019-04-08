let itemsPerPage = 20;
Ext.define('ext_demo_001.store.Per', {
    extend: 'Ext.data.Store',
    alias: 'store.per',
    start : 0,
    limit : itemsPerPage,
    pageSize : itemsPerPage,
    autoLoad: true,
    fields: [
        'bookName', 'description', 'author','cover','category','categoryId','price','online','createTime'
    ],
    proxy: {
        url:'http://localhost:7000/book/page',
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'result'
        }
    }
});

