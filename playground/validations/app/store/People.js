Ext.define('Validations.store.People', {
    extend: 'Ext.data.Store',
    requires: [
        'Validations.model.Person'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.applyIf({
            model: 'Validations.model.Person',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'data/Person.json',
                reader: {
                    type: 'json'
                }
            }        
        }, cfg)]);
    }
});