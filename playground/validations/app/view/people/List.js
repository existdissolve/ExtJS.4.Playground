Ext.define('Validations.view.people.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.peoplelist',
    requires: ['Validations.view.people.Toolbar'],
    store: 'People',
    title: 'The Brothers Watson',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            columns: [
                {
                    header: 'Name',
                    dataIndex: 'name'
                },
                {
                    header: 'Age',
                    dataIndex: 'age'
                },
                {
                    header: 'Hobby',
                    dataIndex: 'hobby',
                    flex: 1
                }
            ],
            dockedItems: [
                {
                    xtype: 'peopletoolbar',
                    dock: 'top'
                }
            ]            
        });
        me.callParent(arguments);
    }
});