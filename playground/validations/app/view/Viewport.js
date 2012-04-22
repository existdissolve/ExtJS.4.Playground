Ext.define('Validations.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.appviewport',
    renderTo: Ext.getBody(),
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {xtype:'peoplelist'}
            ]
        });
        me.callParent(arguments);
    }    
});