Ext.define('Validations.view.people.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.peopleform',
    bodyPadding: 10,
    border: false,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            defaults: {
                width: 250,
                labelWidth: 70  
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Name'
                },
                {
                    xtype: 'numberfield',
                    name: 'age',
                    fieldLabel: 'Age',
                    value: 20
                },
                {
                    xtype: 'textfield',
                    name: 'hobby',
                    fieldLabel: 'Hobby'
                }    
            ] 
        });
        me.callParent(arguments);
    }
})
