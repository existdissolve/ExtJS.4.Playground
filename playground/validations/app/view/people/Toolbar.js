Ext.define('Validations.view.people.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.peopletoolbar',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    text: 'Add',
                    action: 'addperson'
                }
            ]
        })
        me.callParent(arguments);
    }
})
