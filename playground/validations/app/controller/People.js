Ext.define('Validations.controller.People', {
    extend: 'Ext.app.Controller',
    models: ['Person'],
    stores: ['People'],
    views: ['people.List','people.Form'],
    refs: [
        {ref: 'list', selector: 'peoplelist'},
        {ref: 'form', selector: 'peopleform'},
        {ref: 'toolbar', selector: 'peopletoolbar'}
    ],    
    init: function() {
        this.control({
            'peoplelist': {
                itemdblclick: function(grid, record, item){
                    this.showPeopleForm(record)
                }
            },
            'peopletoolbar button[action=addperson]': {
                click: function() {
                    this.showPeopleForm()
                }
            },
            'button[action=createperson]': {
                click: this.createPerson
            },
            'button[action=editperson]': {
                click: this.editPerson
            }
        })
    },
    showPeopleForm: function(record) {
        var title = !record ? 'Add Person' : 'Edit Person',
            action = !record ? 'createperson' : 'editperson';
        var win = Ext.create('Ext.window.Window', {
            title: title,
            modal: true,
            items: [
                {
                    xtype: 'peopleform'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    items: [
                        '->',
                        {
                            text: 'Save',
                            action: action
                        }
                    ],
                    dock: 'bottom'
                }
            ]            
        });
        if(record) {
            this.getForm().getForm().loadRecord(record);
        }
        else {
            //this.getForm().getForm().loadRecord(Ext.create('Validations.model.Person'))
        }
        win.show();
    },
    editPerson: function() {
        var form = this.getForm().getForm(),
            record = form.getRecord();
        if(!form.isValid()) {
            Ext.Msg.alert('Um..', 'You\'ve got some errors to fix pal');
            return false;
        }
        else {
            record.set(form.getValues());
            Ext.WindowManager.getActive().close()
        }
    },
    createPerson: function() {
        var form = this.getForm().getForm(),
            record = form.getRecord();
        if(!form.isValid()) {
            Ext.Msg.alert('Um..', 'You\'ve got some errors to fix pal');
            return false;
        }
        else {
            this.getPeopleStore().add(form.getValues());
            Ext.WindowManager.getActive().close()
        }
    }
})
