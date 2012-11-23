Ext.Loader.setConfig({enabled:true});

Ext.data.validations.minMessage = 'must be greater than or equal to the specified value';
Ext.data.validations.min = function(config, value) {
    if(!Ext.isNumeric(value) || value < config.min) {
        return false;
    }
    return true;
} 
Ext.data.validations.maxMessage = 'must be less than or equal to the specified value';
Ext.data.validations.max = function(config, value) {
    if(!Ext.isNumeric(value) || value > config.max) {
        return false;
    }
    return true;
} 
Ext.data.validations.rangeMessage = 'must be between the specified values';
Ext.data.validations.range = function(config, value) {
    if(!Ext.isNumeric(value) || (value > config.max || value < config.min)) {
        return false;
    }
    return true;
} 

Ext.override(Ext.form.field.Base, {
    setModelFieldValidation: function(validation) {
        this.modelValidations = Ext.isArray(this.modelValidations) ? this.modelValidations : [];
        this.modelValidations.push(validation);
    },
    getModelErrors: function(value) {
        var errors      = Ext.create('Ext.data.Errors'),
            validations = this.modelValidations,
            validators  = Ext.data.validations,
            length, validation, field, valid, type, i;

        if (validations) {
            length = validations.length;

            for (i = 0; i < length; i++) {
                validation = validations[i];
                field = validation.field || validation.name;
                type  = validation.type;
                valid = validators[type](validation, value);

                if (!valid) {
                    errors.add({
                        field  : field,
                        message: validation.message || validators[type + 'Message']
                    });
                }
            }
        }
        return errors;
    },
    validateValue: function(value) {
        var me = this,
            errors = me.getErrors(value),
            modelErrors = me.getModelErrors(value),
            isValid = Ext.isEmpty(errors) && modelErrors.isValid();
        if (!me.preventMark) {
            if (isValid) {
                me.clearInvalid();
            } 
            else {
                if(!modelErrors.isValid()) {
                    modelErrors.each(function() {
                        errors.push(this.message);
                    })
                }
                me.markInvalid(errors);
            }
        }
        return isValid;
    }
})

Ext.override(Ext.form.Basic, {
    loadRecord: function(record) {
        this._record = record;
        this.setModelValidations(record.validations);
        return this.setValues(record.data);
    },
    setModelValidations: function(validations) {
        var fields = this.getFields(), i;
        for(i=0;i<validations.length;i++) {
            var fieldMatch = this.findField(validations[i].field);
            if(fieldMatch) {
                fieldMatch.setModelFieldValidation(validations[i])
            }
        }
    }
})

Ext.application({
    name: 'Validations',
    appFolder: 'app',
    autoCreateViewport: true,
    controllers: ['People'],
    launch: function() {
        
    }
})
