Ext.define('Validations.model.Person', {
    extend: 'Ext.data.Model',
    fields: [
        {name:"name", type:'string'},
        {name:"age", type:"int"},
        {name:"hobby", type:"string"}
    ],
    validations: [
        {type: 'presence', field: 'name', message: 'You have to enter a name, silly'},
        {type: 'presence', field: 'age', message: 'You must specify an age'},
        {type: 'min', field: 'age', message: 'You must specify an age greater than 20', min:20},
        {type: 'presence', field: 'hobby', message: 'You must enter a hobby'},
        {type: 'length', field: 'hobby', min:5, message: 'You must specify a hobby with more than 4 characters'}
    ]
}) 