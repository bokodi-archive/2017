var FormBuilder = (function(_) {
    function FormBuilder(selector, options) {
        EventTarget.call(this);

        this.id = _.uuid();

        this.wrapper = _.q(selector);

        if (this.wrapper === null) {
            throw new FormBuilderError('No matches were found. Selector: ' + selector);
        }

        this.wrapper.classList.add('form-builder-wrapper', 'row');

        this.ghost = new Ghost();

        this.transferData = Object.create(null);

        this.items = [];
        this.fieldTypes = [];
        this.fieldTypeGroups = Object.create(null);

        _.forIn(FormBuilder.fieldTypes, function(key, fieldType) {
            this.addFieldTypes(fieldType);
        }, this);

        this.init();

        _.use(this, options);

        this.fieldTypes.forEach(function(fieldType) {
            Field.initTemplate(fieldType, this);
        }, this);
    }

    FormBuilder.EVENT_ADD_FIELD = 1;
    FormBuilder.EVENT_EDIT_FIELD = 2;
    FormBuilder.EVENT_REMOVE_FIELD = 3;
    FormBuilder.EVENT_MOVE_FIELD = 4;

    FormBuilder.fieldTypes = Object.create(null);
    FormBuilder.addFieldType = function(fieldType, constructor) {
        if (!(fieldType in this.fieldTypes)) {
            this.fieldTypes[fieldType] = constructor;
        }
    };
    FormBuilder.getFieldType = function(fieldType) {
        if (!(fieldType in this.fieldTypes)) {
            return null;
        }

        return this.fieldTypes[fieldType];
    };

    FormBuilder.createFieldType = function(label, constructorDecorator, protoDecorator) {
        var Constructor = function() {
            Field.call(this);

            constructorDecorator.call(this, FormBuilder.getInputs());

            this.init();
        };

        Constructor.label = label;
        Constructor.key = Constructor.label.toUpperCase();
        Constructor.fieldGroup = 'Custom';

        var proto = Constructor.prototype = Object.create(Field.prototype);
        proto.constructor = Constructor;
        FormBuilder.addFieldType(Constructor.key, Constructor);

        proto.toString = function() {
            return '[object CustomField]';
        };

        if (typeof protoDecorator === 'function') {
            protoDecorator.call(proto);
        }

        return Constructor;
    };

    FormBuilder.getInputs = function() {
        return {
            text: TextInput,
            textarea: TextareaInput,
            checkbox: CheckboxInput,
            select: SelectInput,
            radio: RadioInput
        };
    };

    var formBuilderProto = FormBuilder.prototype = Object.create(EventTarget.prototype);
    formBuilderProto.constructor = FormBuilder;

    formBuilderProto.get = function(item) {
        var index = this.indexOf(item);

        return this.getAt(index);
    };

    formBuilderProto.getAt = function(index) {
        if (this.hasAt(index)) {
            return this.items[index];
        }

        return null;
    };

    formBuilderProto.has = function(item) {
        return this.indexOf(item) !== -1;
    };

    formBuilderProto.hasAt = function(index) {
        return this.items.hasOwnProperty(index);
    };

    formBuilderProto.add = function(item) {
        if (!item instanceof Field) {
            throw new FormBuilderError('Added item must be an instance of ' + Field);
        }

        this.items.push(item);

        return this;
    };

    formBuilderProto.addAt = function(item, index) {
        this.items.splice(index, 0, item);

        return this;
    };

    formBuilderProto.remove = function(item) {
        var index = this.indexOf(item);

        return this.removeAt(index);
    };

    formBuilderProto.removeAt = function(index) {
        var removedItems = this.items.splice(index, 1);

        if (removedItems.length === 1) {
            return removedItems[0];
        }

        return null;
    };

    formBuilderProto.clear = function() {
        this.each(function(field) {
            this.fieldsListElement.removeChild(field.node);
            delete Field.fields[field.fieldIndex];
        });

		this.items.length = 0;

        this.fieldsListElement.classList.add('empty');
    };

    formBuilderProto.insert = function(item, index) {
        var scope = this;
        var node = this.create(item);
        var referenceElement = index === undefined ? null : this.fieldsListElement.childNodes.item(index);

        this.fieldsListElement.classList.remove('empty');

        item.copyButtonElement.addEventListener('click', function() {
            var copyItem = item.clone();
            var index = _.indexOf.call(scope.fieldsListElement.childNodes, node);

            if (index === -1) {
                index = undefined;
            }

            scope.insert(copyItem, index);
        });

        item.removeButtonElement.addEventListener('click', function() {
            scope.remove(item);
            scope.fieldsListElement.removeChild(node);
            delete Field.fields[item.fieldIndex];

            if (scope.items.length === 0) {
                scope.fieldsListElement.classList.add('empty');
            }

            scope.dispatchEvent(FormBuilder.EVENT_REMOVE_FIELD, new FormBuilderEvent(FormBuilder.EVENT_REMOVE_FIELD, item));
        });

        item.saveButtonElement.addEventListener('click', function() {
            scope.dispatchEvent(FormBuilder.EVENT_EDIT_FIELD, new FormBuilderEvent(FormBuilder.EVENT_EDIT_FIELD, item));
        });

        node.addEventListener('dragover', function(e) {
            var data = scope.getTransferData();
            var builderId = data.builderId;

            e.preventDefault();

            if (builderId !== scope.id) {
                return void 0;
            }

            var target = e.target;
            var ifBefore = this.offsetHeight / 2 > e.offsetY;

            if (target.parentNode === this) {
                target = this; // IE fix
            }

            if (target !== this || e.offsetY < 0) return void 0;

            if (ifBefore) {
                scope.fieldsListElement.insertBefore(scope.ghost.node, this);
            } else {
                if (this.nextElementSibling !== null) {
                    scope.fieldsListElement.insertBefore(scope.ghost.node, this.nextElementSibling);
                } else {
                    scope.fieldsListElement.appendChild(scope.ghost.node);
                }
            }
        });

        if (referenceElement !== null) {
            referenceElement.parentNode.insertBefore(node, referenceElement);
            this.addAt(item, index);
        } else {
            this.fieldsListElement.appendChild(node);
            this.add(item);
        }

        scope.dispatchEvent(FormBuilder.EVENT_ADD_FIELD, new FormBuilderEvent(FormBuilder.EVENT_ADD_FIELD, item));
    };

    formBuilderProto.moveTo = function(item, index) {
        var referenceElement;

        if (!this.has(item)) {
            throw new FormBuilderError('Unable to move field. The field does not exists');
        }

        referenceElement = this.fieldsListElement.childNodes.item(index);

        if (this.indexOf(item) > index) {
            index -= 1;
        }

        this.addAt(this.remove(item), index);
        this.fieldsListElement.insertBefore(item.node, referenceElement);
    };

    formBuilderProto.create = function(item) {
        var scope = this;
        var node = item.node;

        node.draggable = true;
        node.addEventListener('dragstart', function(e) {
            if (scope.isReadonly()) {
                e.preventDefault();
                return false;
            }

            var data = {
                fieldType: item.constructor.key,
                eventType: 'move',
                fieldIndex: item.fieldIndex,
                builderId: scope.id
            };

            scope.setTransferData(data);
        });

        node.addEventListener('dragend', function() {
            scope.ghost.remove();
            scope.clearTransferData();
        });

        item.refresh();
        node.appendChild(item.fieldElement);

        return node;
    };

    formBuilderProto.indexOf = function(item) {
        return this.items.indexOf(item);
    };

    formBuilderProto.each = function(callback) {
        return this.items.forEach(callback, this);
    };

    formBuilderProto.callEach = function(callback) {
        var i = 0;
        var il = this.items.length;
        var item;

        for (; i < il; i++) {
            item = this.get(i);

            callback.call(item, i, this);
        }

        return this;
    };

    formBuilderProto.init = function() {
        var scope = this;

        this.fieldsContainerElement = _.createElement('div', '', { class: 'fields-container col-sm-8' });
        this.fieldsListElement = _.createElement('ul', '', { class: 'fields-list empty', 'data-content': 'Drop fields here!' });

        this.templatesContainerElement = _.createElement('div', '', { class: 'templates-container col-sm-4' });
        // this.templatesListElement = _.createElement('ul', '', { class: 'templates-list list-group' });

        this.fieldsContainerElement.appendChild(this.fieldsListElement);
        // this.templatesContainerElement.appendChild(this.templatesListElement);

        this.wrapper.appendChild(this.fieldsContainerElement);
        this.wrapper.appendChild(this.templatesContainerElement);

        this.fieldTypes.forEach(function(fieldType) {
            var panel, panelHeader, templatesListElement;
            var fieldGroup = fieldType.fieldGroup.toUpperCase();

            if (fieldGroup in this.fieldTypeGroups) return;

            panel = _.createElement('div', '', { class: 'panel panel-default' });
            panelHeader = _.createElement('div', fieldType.fieldGroup, { class: 'panel-heading' });
            templatesListElement = _.createElement('ul', '', { class: 'templates-list list-group' });

            panel.appendChild(panelHeader);
            panel.appendChild(templatesListElement);

            this.templatesContainerElement.appendChild(panel);

            this.fieldTypeGroups[fieldGroup] = templatesListElement;
        }, this);

        this.fieldsListElement.addEventListener('dragover', _.preventDefault);

        this.fieldsListElement.addEventListener('drop', function(e) {
            var data = scope.getTransferData();
            var itemKey = data.fieldType;
            var itemType = FormBuilder.fieldTypes[itemKey];
            var index = _.indexOf.call(scope.fieldsListElement.childNodes, scope.ghost.node);
            var builderId = data.builderId;
            var item;

            if (index === -1) {
                index = scope.items.length;
            }

            e.preventDefault();

            if (builderId !== scope.id) {
                return void 0;
            }

            if (!itemType) {
                throw new FormBuilderError('Unknown field type: ' + itemType);
            }

            if (data.eventType === 'add') {
                item = new itemType();

                scope.insert(item, index);
            } else if (data.eventType === 'move') {
                item = Field.fields[data.fieldIndex];

                scope.moveTo(item, index);

                scope.dispatchEvent(FormBuilder.EVENT_MOVE_FIELD, new FormBuilderEvent(FormBuilder.EVENT_MOVE_FIELD, item));
            }
        });
    };

    formBuilderProto.addFieldTypes = function() {
        Array.prototype.push.apply(this.fieldTypes, _.slice.call(arguments));
    };

    formBuilderProto.removeFieldTypes = function() {
        _.slice.call(arguments).forEach(function(arg) {
            var index = this.fieldTypes.indexOf(arg);

            if (index !== -1) {
                this.fieldTypes.splice(index, 1);
            }
        }, this);
    };

    formBuilderProto.setFieldTypes = function(fieldTypes) {
        this.fieldTypes = fieldTypes;
    };

    formBuilderProto.setReadonly = function(isReadonly) {
        isReadonly = isReadonly !== false;

        if (isReadonly) {
            this.wrapper.classList.add('read-only');
            this.fieldsContainerElement.classList.remove('col-sm-8');
            this.fieldsContainerElement.classList.add('col-sm-12');
        } else {
            this.wrapper.classList.remove('read-only');
            this.fieldsContainerElement.classList.remove('col-sm-12');
            this.fieldsContainerElement.classList.add('col-sm-8');
        }

        return isReadonly;
    };

    formBuilderProto.isReadonly = function() {
        return this.wrapper.classList.contains('read-only');
    };

    formBuilderProto.getTransferData = function() {
        return this.transferData;
    };

    formBuilderProto.setTransferData = function(data) {
        Object.getOwnPropertyNames(data).forEach(function (property) {
            this.transferData[property] = data[property];
        }, this);

        return this.transferData;
    };

    formBuilderProto.clearTransferData = function() {
        for (var key in this.transferData) {
            delete this.transferData[key];
        }

        return this.transferData;
    };

    formBuilderProto.getJSONData = function() {
        var data = this.items.map(function(field) {
            return field.toData();
        }, this);

        return _.JSONEncode(data);
    };

    formBuilderProto.setJSONData = function(JSONData) {
        var data = _.JSONDecode(JSONData);

        this.clear();

		if (data) {
			data.forEach(function(fieldData) {
				this.insert(Field.fromData(fieldData));
			}, this);
		}

        return this;
    };

    formBuilderProto.toString = function() {
        return '[object FormBuilder]';
    };

    function Ghost() {
        this.node = _.createElement('li', '--- DROP HERE ---', { class: 'text-center ghost' });

        this.node.addEventListener('dragover', _.preventDefault);
    }

    var ghostProto = Ghost.prototype = Object.create(null);
    ghostProto.constructor = Ghost;

    ghostProto.remove = function() {
        var parentElement = this.node.parentElement;

        if (parentElement !== null) {
            parentElement.removeChild(this.node);

            return true;
        }

        return false;
    };

    function Field() {
        if (this.constructor === Field) {
            throw new FormBuilderError('Can\'t instantiate abstract class: ' + Field);
        }

        this.id = _.uuid();
        this.node = _.createElement('li');
        this.templateData = {};

        this.fieldIndex = Field.fieldsCounter++;
        Field.fields[this.fieldIndex] = this;
    }

    Field.fieldsCounter = 0;
    Field.fields = Object.create(null);

    Field.fromData = function(fieldData) {
        var constructor = FormBuilder.getFieldType(fieldData.fieldType);
        var field;

        if (constructor === null) {
            throw new FormBuilderError('Unknown field type: ' + fieldData.fieldType);
        }

        field = new constructor();

        field.id = fieldData.id;

        _.forIn(field.templateData, function(key, input) {
            var inputData = fieldData.templateData[key];

            input.setValue(inputData.value);
            input.setOptions(inputData.options);
        });

        field.refresh();

        return field;
    };

    Field.initTemplate = function(fieldType, formBuilder) {
        var node = _.createElement('li', fieldType.label, { class: 'list-group-item', 'data-field-type': fieldType.key });

        node.draggable = true;

        node.addEventListener('dragstart', function() {
            var data = {
                fieldType: fieldType.key,
                eventType: 'add',
                builderId: formBuilder.id
            };

            formBuilder.setTransferData(data);
        });

        node.addEventListener('dragend', function() {
            formBuilder.ghost.remove();
            formBuilder.clearTransferData();
        });

        node.addEventListener('click', function() {
            var item = new fieldType();

            formBuilder.insert(item);
        });

        formBuilder.fieldTypeGroups[fieldType.fieldGroup.toUpperCase()].appendChild(node);
    };

    Field.getContentElement = function() {
        return _.createElement('div', '', { class: 'field-content' });
    };

    Field.getActionsElement = function(field) {
        var actionsWrapperElement = _.createElement('div', '', { class: 'btn-group action-buttons' });

        field.editButtonElement = _.createElement('button', '<span class="fa fa-pencil"></span>', { class: 'btn btn-default btn-sm edit-button', type: 'button' });
        field.copyButtonElement = _.createElement('button', '<span class="fa fa-files-o"></span>', { class: 'btn btn-default btn-sm copy-button', type: 'button' });
        field.removeButtonElement = _.createElement('button', '<span class="fa fa-times"></span>', { class: 'btn btn-default btn-sm remove-button', type: 'button' });

        field.editButtonElement.addEventListener('click', function() {
            field.toggleEdit();
        });

        actionsWrapperElement.appendChild(field.editButtonElement);
        actionsWrapperElement.appendChild(field.copyButtonElement);
        actionsWrapperElement.appendChild(field.removeButtonElement);

        return actionsWrapperElement;
    };

    Field.getInputsElement = function(field) {
        var inputsWrapperElement = _.createElement('div', '', { class: 'inputs-wrapper well well-sm hidden' });
        field.inputsListElement = _.createElement('ul', '', { class: 'inputs-list' });
        field.saveButtonElement = _.createElement('button', 'Save', { class: 'btn btn-sm btn-primary save-input', type: 'button' });

        _.forIn(field.templateData, function(key, input) {
            var inputWrapperElement = _.createElement('li', '', { class: 'input-wrapper' });

            inputWrapperElement.appendChild(input.containerElement);

            field.inputsListElement.appendChild(inputWrapperElement);
        });

        field.saveButtonElement.addEventListener('click', function() {
            field.refresh();
        });

        inputsWrapperElement.appendChild(field.inputsListElement);
        inputsWrapperElement.appendChild(field.saveButtonElement);

        return inputsWrapperElement;
    };

    var fieldProto = Field.prototype = Object.create(null);
    fieldProto.constructor = Field;

    fieldProto.refresh = function() {
        var templateData = Object.create(null);

        _.forIn(this.templateData, function(templateKey, input) {
            templateData[templateKey] = input.getRenderValue();
        });

        this.contentElement.innerHTML = _.supplant(this.constructor.template, templateData);

        this.toggleEdit(false);
    };

    fieldProto.init = function() {
        this.contentElement = Field.getContentElement();
        this.actionsElement = Field.getActionsElement(this);
        this.inputsWrapperElement = Field.getInputsElement(this);

        this.fieldElement = _.createElement('div', '', { class: 'fields-list-item' });

        this.fieldElement.appendChild(this.contentElement);
        this.fieldElement.appendChild(this.actionsElement);
        this.fieldElement.appendChild(this.inputsWrapperElement);
    };

    fieldProto.toggleEdit = function(showInputsWrapper) {
        if (typeof showInputsWrapper !== 'boolean') {
            showInputsWrapper = this.inputsWrapperElement.classList.contains('hidden');
        }

        this.editButtonElement.firstElementChild.classList[showInputsWrapper ? 'add' : 'remove']('fa-eye');
        this.editButtonElement.firstElementChild.classList[showInputsWrapper ? 'remove' : 'add']('fa-pencil');

        this.inputsWrapperElement.classList[showInputsWrapper ? 'remove' : 'add']('hidden');
        this.contentElement.classList[showInputsWrapper ? 'add' : 'remove']('hidden');

        this.node.draggable = !showInputsWrapper;
    };

    fieldProto.toData = function() {
        var data = Object.create(null);

        data.id = this.id;
        data.fieldType = this.constructor.key;
        data.templateData = Object.create(null);

        _.forIn(this.templateData, function(key, input) {
            data.templateData[key] = input.getData();
        });

        return data;
    };

    fieldProto.clone = function() {
        var clone = new this.constructor();

        _.forIn(this.templateData, function(key, input) {
            var cloneInput = clone.templateData[key];

            if (cloneInput instanceof Input) {
                cloneInput.loadFrom(input);
            }
        });

        clone.refresh();

        return clone;
    };

    fieldProto.setTemplate = function(template) {
        this.constructor.template = template;
    };

    fieldProto.toString = function() {
        return '[object Field]';
    };

    function ParagraphField() {
        Field.call(this);

        this.templateData = {
            text: new TextInput('Text', 'Lorem ipsum dolor sit amet.')
        };

        this.init();
    }

    ParagraphField.label = 'Paragraph';
    ParagraphField.key = ParagraphField.label.toUpperCase();
    ParagraphField.template = '<p>{{text}}</p>';
    ParagraphField.fieldGroup = 'Static';

    var paragraphFieldProto = ParagraphField.prototype = Object.create(Field.prototype);
    paragraphFieldProto.constructor = ParagraphField;
    FormBuilder.addFieldType(ParagraphField.key, ParagraphField);

    paragraphFieldProto.toString = function() {
        return '[object ParagraphField]';
    };

    function HeaderField() {
        Field.call(this);

        this.templateData = {
            text: new TextInput('Header', 'Title')
        };

        this.init();
    }

    HeaderField.label = 'Header';
    HeaderField.key = HeaderField.label.toUpperCase();
    HeaderField.template = '<h2>{{text}}</h2>';
    HeaderField.fieldGroup = 'Static';

    var headerFieldProto = HeaderField.prototype = Object.create(Field.prototype);
    headerFieldProto.constructor = HeaderField;
    FormBuilder.addFieldType(HeaderField.key, HeaderField);

    headerFieldProto.toString = function() {
        return '[object HeaderField]';
    };

    function TextInputField() {
        Field.call(this);

        this.templateData = {
            label: new TextInput('Label', 'Label'),
            value: new TextInput('Input', ''),
            required: new CheckboxInput('Required', false),
            help: new TextInput('Help Text', '')
        };

        this.init();
    }

    TextInputField.label = 'Text Input';
    TextInputField.key = TextInputField.label.toUpperCase();
    TextInputField.template = '<label class="control-label">{{label}} </label><input disabled class="form-control" type="text" value="{{value}}" />';
    TextInputField.fieldGroup = 'Input';

    var textInputFieldProto = TextInputField.prototype = Object.create(Field.prototype);
    textInputFieldProto.constructor = TextInputField;
    FormBuilder.addFieldType(TextInputField.key, TextInputField);

    textInputFieldProto.toString = function() {
        return '[object TextInputField]';
    };

    function CheckboxField() {
        Field.call(this);

        this.templateData = {
            label: new TextInput('Label', 'Required'),
            checked: new CheckboxInput('Checked', false),
            required: new CheckboxInput('Required', false, 'required'),
            help: new TextInput('Help Text', '')
        };

        this.init();
    }

    CheckboxField.label = 'Checkbox';
    CheckboxField.key = CheckboxField.label.toUpperCase();
    CheckboxField.template = '<label class="control-label">{{label}} </label><input disabled type="checkbox" {{required}} {{checked}} />';
    CheckboxField.fieldGroup = 'Input';

    var checkboxFieldProto = CheckboxField.prototype = Object.create(Field.prototype);
    checkboxFieldProto.constructor = CheckboxField;
    FormBuilder.addFieldType(CheckboxField.key, CheckboxField);

    checkboxFieldProto.toString = function() {
        return '[object CheckboxField]';
    };

    function TextareaField() {
        Field.call(this);

        this.templateData = {
            label: new TextInput('Label', 'Text'),
            value: new TextareaInput('Text', ''),
            required: new CheckboxInput('Required', false),
            help: new TextInput('Help Text', '')
        };

        this.init();
    }

    TextareaField.label = 'Textarea';
    TextareaField.key = TextareaField.label.toUpperCase();
    TextareaField.template = '<label class="control-label">{{label}} </label><textarea disabled class="form-control">{{value}}</textarea>';
    TextareaField.fieldGroup = 'Input';

    var textareaFieldProto = TextareaField.prototype = Object.create(Field.prototype);
    textareaFieldProto.constructor = TextareaField;
    FormBuilder.addFieldType(TextareaField.key, TextareaField);

    textareaFieldProto.toString = function() {
        return '[object TextareaField]';
    };

    function SelectField() {
        var requiredInput = new CheckboxInput('Required', false, 'required');
        var multipleInput = new CheckboxInput('Multiple', false, 'multiple');
        var optionsInput = new SelectInput('Options', 1, false);

        Field.call(this);

        this.templateData = {
            label: new TextInput('Label', 'Select'),
            required: requiredInput,
            multiple: multipleInput,
            options: optionsInput,
            help: new TextInput('Help Text', '')
        };

        requiredInput.on('change', optionsInput.setRequired.bind(optionsInput)).emit('change', requiredInput.isChecked());
        multipleInput.on('change', optionsInput.setMultiple.bind(optionsInput)).emit('change', multipleInput.isChecked());

        this.init();
    }

    SelectField.label = 'Select';
    SelectField.key = SelectField.label.toUpperCase();
    SelectField.template = '<label class="control-label">{{label}} </label><select class="form-control" {{required}} {{multiple}} disabled >{{options}}</select>';
    SelectField.fieldGroup = 'Input';

    var selectFieldProto = SelectField.prototype = Object.create(Field.prototype);
    selectFieldProto.constructor = SelectField;
    FormBuilder.addFieldType(SelectField.key, SelectField);

    selectFieldProto.toString = function() {
        return '[object SelectField]';
    };

    function InputListField() {
        var requiredInput = new CheckboxInput('Required', false, 'required');
        var multipleInput = new CheckboxInput('Multiple', false, 'multiple');
        var optionsInput = new SelectInput('Options', 1, true);

        Field.call(this);

        this.templateData = {
            label: new TextInput('Label', 'List'),
            required: requiredInput,
            multiple: multipleInput,
            items: optionsInput,
            help: new TextInput('Help Text', '')
        };

        requiredInput.on('change', optionsInput.setRequired.bind(optionsInput)).emit('change', requiredInput.isChecked());
        multipleInput.on('change', optionsInput.setMultiple.bind(optionsInput)).emit('change', multipleInput.isChecked());

        this.init();
    }

    InputListField.label = 'Input List';
    InputListField.key = InputListField.label.toUpperCase();
    InputListField.template = '<label class="control-label">{{label}} </label><div class="input-list-items">{{items}}</div>';
    InputListField.fieldGroup = 'Input';

    var inputListFieldProto = InputListField.prototype = Object.create(Field.prototype);
    inputListFieldProto.constructor = InputListField;
    FormBuilder.addFieldType(InputListField.key, InputListField);

    inputListFieldProto.toString = function() {
        return '[object InputListField]';
    };

    function FileField() {
        Field.call(this);

        this.templateData = {
            label: new TextInput('Label', 'File'),
            multiple: new CheckboxInput('Multiple', false, 'multiple'),
            required: new CheckboxInput('Required', false, 'required'),
            help: new TextInput('Help Text', '')
        };

        this.init();
    }

    FileField.label = 'File';
    FileField.key = FileField.label.toUpperCase();
    FileField.template = '<label class="control-label">{{label}} </label><input {{multiple}} {{required}} disabled type="file" class="form-control" />';
    FileField.fieldGroup = 'Input';

    var fileFieldProto = FileField.prototype = Object.create(Field.prototype);
    fileFieldProto.constructor = FileField;
    FormBuilder.addFieldType(FileField.key, FileField);

    fileFieldProto.toString = function() {
        return '[object FileField]';
    };

    function Input(name, defaultValue) {
        if (this.constructor === Input) {
            throw new FormBuilderError('Can\'t instantiate abstract class: ' + Input);
        }

        EventTarget.call(this);

        this.options = {};
        this.node = null;
        this.name = name;
        this.defaultValue = defaultValue;
    }

    var inputProto = Input.prototype = Object.create(EventTarget.prototype);
    inputProto.constructor = Input;

    inputProto.getData = function() {
        var data = Object.create(null);

        data.value = this.getValue();
        data.options = this.getOptions();

        return data;
    };

    inputProto.setOptions = function(options) {
        this.options = options;
    };

    inputProto.getOptions = function() {
        return Object.assign({}, this.options);
    };

    inputProto.init = function() {
        this.containerElement = _.createElement('div', '', { class: 'input-container' });

        this.valueContainerElement = _.createElement('div');
        // this.optionsContainerElement = _.createElement('div', '', { class: 'options-container' });

        this.labelElement = _.createElement('label', this.name + ': ', { class: 'control-label input-label' });
        this.valueContainerElement.appendChild(this.labelElement);
        this.valueContainerElement.appendChild(this.node);

        this.containerElement.appendChild(this.valueContainerElement);
        // this.containerElement.appendChild(this.optionsContainerElement);

        if (this.defaultValue !== undefined) {
            this.setValue(this.defaultValue);
        }
    };

    inputProto.loadFrom = function(input) {
        this.setProps(input);
        this.setValue(input.getValue());
        this.setOptions(input.getOptions());
    };

    inputProto.getRenderValue = function() {
        return this.getValue();
    };

    inputProto.setProps = function() {};

    inputProto.getValue = function() {};

    inputProto.setValue = function() {};

    inputProto.toString = function() {
        return '[object Input]';
    };

    function TextInput() {
        Input.apply(this, _.slice.call(arguments));

        this.node = _.createElement('input', '', { value: '', class: 'form-control' });

        this.init();
    }

    var textInputProto = TextInput.prototype = Object.create(Input.prototype);
    textInputProto.constructor = TextInput;

    textInputProto.getValue = function() {
        return this.node.value;
    };

    textInputProto.setValue = function(val) {
        return this.node.value = val;
    };

    textInputProto.toString = function() {
        return '[object TextInput]';
    };

    function CheckboxInput(name, defaultValue, checkedValue) {
        Input.apply(this, _.slice.call(arguments));

        this.node = _.createElement('input', '', { type: 'checkbox', class: 'input-option-checkbox' });
        this.checkedValue = checkedValue || 'checked';

        this.init();
    }

    var checkboxInputProto = CheckboxInput.prototype = Object.create(Input.prototype);
    checkboxInputProto.constructor = CheckboxInput;

    checkboxInputProto.init = function() {
        var scope = this;

        this.containerElement = _.createElement('div', '', { class: 'input-container' });

        this.valueContainerElement = _.createElement('div');
        // this.optionsContainerElement = _.createElement('div');

        this.labelElement = _.createElement('label', this.name, { class: 'control-label input-label' });
        this.valueContainerElement.appendChild(this.node);
        this.valueContainerElement.appendChild(this.labelElement);

        this.containerElement.appendChild(this.valueContainerElement);
        // this.containerElement.appendChild(this.optionsContainerElement);

        if (this.defaultValue !== undefined) {
            this.setValue(this.defaultValue);
        }

        this.node.addEventListener('click', function() {
            scope.emit('change', scope.isChecked());
        });
    };

    checkboxInputProto.getValue = function() {
        return !!this.node.checked;
    };

    checkboxInputProto.getRenderValue = function() {
        return this.node.checked ? this.checkedValue : '';
    };

    checkboxInputProto.setValue = function(isChecked) {
        isChecked = Boolean(isChecked);

        if (isChecked) {
            this.node.setAttribute('checked', 'on');
        } else {
            this.node.removeAttribute('checked');
        }

        this.node.checked = isChecked;

        this.emit('change', isChecked);

        return isChecked;
    };

    checkboxInputProto.isChecked = function() {
        return this.getValue();
    };

    checkboxInputProto.toString = function() {
        return '[object CheckboxInput]';
    };

    function TextareaInput() {
        Input.apply(this, _.slice.call(arguments));

        this.node = _.createElement('textarea', '', { class: 'form-control' });

        this.init();
    }

    var textareaInputProto = TextareaInput.prototype = Object.create(Input.prototype);
    textareaInputProto.constructor = TextareaInput;

    textareaInputProto.getValue = function() {
        return this.node.value;
    };

    textareaInputProto.setValue = function(val) {
        return this.node.value = val;
    };

    textareaInputProto.toString = function() {
        return '[object TextareaInput]';
    };

    function RadioInput(name, defaultValue, options) {
        Input.apply(this, _.slice.call(arguments));

        this.node = _.createElement('select', '', { class: 'form-control' });

        options.forEach(function(optionData) {
            this.node.appendChild(_.createElement('option', optionData.label, { value: optionData.value }));
        }, this);

        this.init();
    }

    var radioInputProto = RadioInput.prototype = Object.create(Input.prototype);
    radioInputProto.constructor = RadioInput;

    radioInputProto.getValue = function() {
        return this.node.value;
    };

    radioInputProto.setValue = function(val) {
        return this.node.value = val;
    };

    radioInputProto.toString = function() {
        return '[object RadioInput]';
    };

    function SelectInput(name, defaultValue, listType) {
        Input.apply(this, _.slice.call(arguments));

        this.node = _.createElement('ul');

        this.selectClasses = ['form-control'];

        this.listType = !!listType;
        this.multiple = false;
        this.required = false;
        this.options.selectOptions = [];

        this.getValueIndex = (function(index) {
            return function() {
                return ++index;
            };
        }(0));

        this.init();
    }

    var selectInputProto = SelectInput.prototype = Object.create(Input.prototype);
    selectInputProto.constructor = SelectInput;

    selectInputProto.init = function() {
        var scope = this;
        var addButton = _.createElement('button', 'add', { class: 'btn btn-info btn-xs', type: 'button' });

        this.optionsName = 'n' + (Math.random() * 1000 | 0);

        this.addSelectOption();
        this.addSelectOption();

        inputProto.init.call(this);

        this.restoreSelectOptions();

        addButton.addEventListener('click', function() {
            scope.insertSelectOption(null, true);
        });

        this.valueContainerElement.appendChild(addButton);
    };

    selectInputProto.addSelectOption = function(label, selected) {
        var option = {};

        option.value = this.getValueIndex();
        option.selected = !!selected;
        option.label = label || 'option ' + option.value;

        this.options.selectOptions.push(option);

        return option;
    };

    selectInputProto.setMultiple = function(isMultiple) {
        this.multiple = !!isMultiple;

        this.saveSelectOptions();
        this.restoreSelectOptions();
    };

    selectInputProto.setRequired = function(isRequired) {
        this.required = !!isRequired;
    };

    selectInputProto.setOptions = function(options) {
        inputProto.setOptions.call(this, options);
        this.restoreSelectOptions();
    };

    selectInputProto.saveSelectOptions = function() {
        var scope = this;

        this.options.selectOptions = [];

        _.slice.call(this.node.childNodes).forEach(function(li) {
            // var option = Object.create(null);

            var selectedElement = li.querySelector('.select-input-option-selected');
            var labelElement = li.querySelector('.select-input-option-label');

            scope.addSelectOption(labelElement.value, selectedElement.checked);
        });
    };

    selectInputProto.restoreSelectOptions = function() {
        var scope = this;

        this.node.innerHTML = '';

        this.options.selectOptions.forEach(function(optionData, i) {
            scope.insertSelectOption(optionData, i >= 2);
        });
    };

    selectInputProto.insertSelectOption = function(optionData, removeAble) {
        var li = _.createElement('li');
        var optionContainer = _.createElement('div', '', { class: 'row' });
        var selectedElementWrapper = _.createElement('div', '', { class: 'col-sm-1 text-center' });
        var labelElementWrapper = _.createElement('div', '', { class: 'col-sm-4' });
        var removeElementWrapper = _.createElement('div', '', { class: 'col-sm-3' });
        var inputType, input, removeButton;

        optionContainer.appendChild(selectedElementWrapper);
        optionContainer.appendChild(labelElementWrapper);
        optionContainer.appendChild(removeElementWrapper);
        li.appendChild(optionContainer);

        if (!optionData) {
            optionData = {
                label: 'new option'
            };
        }

        if (this.multiple) {
            inputType = 'checkbox';
        } else {
            inputType = 'radio';
        }

        input = _.createElement('input', '', { type: inputType, name: this.optionsName, class: 'select-input-option-selected' });

        if (optionData.selected) {
            input.setAttribute('checked', 'checked');
        }

        selectedElementWrapper.appendChild(input);

        labelElementWrapper.appendChild(_.createElement('input', '', { type: 'text', value: optionData.label, class: 'form-control input-sm select-input-option-label' }));

        if (removeAble) {
            removeButton = _.createElement('button', 'remove', { class: 'btn btn-default btn-xs', type: 'button' });

            removeButton.addEventListener('click', function() {
                li.parentNode.removeChild(li);
            });

            removeElementWrapper.appendChild(removeButton);
        }

        this.node.appendChild(li);
    };

    selectInputProto.getRenderValue = function() {
        return this.listType ? this.getRenderValueTypeList() : this.getRenderValueTypeSelect();
    };

    selectInputProto.getRenderValueTypeSelect = function () {
        var containerElement = _.createElement('select', '', { disabled: 'disabled', class: this.selectClasses.join(' ') });

        if (this.multiple) {
            containerElement.setAttribute('multiple', 'multiple');
        }

        if (this.required) {
            containerElement.setAttribute('required', 'required');
        }

        this.saveSelectOptions();

        this.options.selectOptions.forEach(function(optionData) {
            var optionElement = _.createElement('option', optionData.label, { value: optionData.value });

            if (optionData.selected) {
                optionElement.setAttribute('selected', 'selected');
            }

            containerElement.appendChild(optionElement);
        });

        return containerElement.innerHTML;
    };

    selectInputProto.getRenderValueTypeList = function () {
        var containerElement = _.createElement('div');
        var inputType = this.multiple ? 'checkbox' : 'radio';

        this.saveSelectOptions();

        this.options.selectOptions.forEach(function(optionData) {
            var wrapper = _.createElement('div');
            var label = _.createElement('label', optionData.label);
            var input = _.createElement('input', '', { type: inputType, disabled: 'disabled' });

            if (optionData.selected) {
                input.setAttribute('checked', 'checked');
            }

            wrapper.appendChild(input);
            wrapper.appendChild(label);

            containerElement.appendChild(wrapper);
        });

        return containerElement.innerHTML;

    };

    selectInputProto.setProps = function(input) {
        this.setMultiple(input.multiple);
        this.setRequired(input.required);
    };

    selectInputProto.getValue = function() {
        var selectedValues = [];

        this.options.selectOptions.forEach(function(option) {
            if (option.selected) {
                selectedValues.push(option.value);
            }
        });

        return selectedValues;
    };

    selectInputProto.setValue = function(values) {
        values = _.toArray(values);

        this.options.selectOptions.forEach(function(option) {
            option.selected = values.indexOf(option.value) !== -1;
        });
    };

    selectInputProto.toString = function() {
        return '[object SelectInput]';
    };

    function FormBuilderEvent(type, target) {
        this.type = type;
        this.target = target;
    }

    var formBuilderEventProto = FormBuilderEvent.prototype = Object.create(null);
    formBuilderEventProto.constructor = FormBuilderEvent;

    formBuilderEventProto.toString = function() {
        return '[object FormBuilderEvent]';
    };

    function FormBuilderError(message) {
        this.message = message;
    }

    var formBuilderErrorProto = FormBuilderError.prototype = Object.create(Error.prototype);
    formBuilderErrorProto.constructor = FormBuilderError;

    formBuilderErrorProto.toString = function() {
        return '[object FormBuilderError]';
    };

    return FormBuilder;
}((function() {
    var _ = Object.create(null);

    var doc = window.document
        , hasOwn = Object.prototype.hasOwnProperty
        , slice = Array.prototype.slice
        , indexOf = Array.prototype.indexOf
    ;

    _.q = doc.querySelector.bind(doc);

    _.preventDefault = function(e) {
        e.preventDefault();
        e.returnValue = false;

        return false;
    };

    _.uuid = function() {
        /**
         * @see http://stackoverflow.com/a/2117523
         */
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    };

    _.toArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]' ? obj : [obj];
    };

    _.forIn = function(obj, callback, thisArg) {
        var keys = Object.keys(obj);
        var i = 0;
        var il = keys.length;
        var key;

        thisArg = thisArg || obj;

        for (; i < il; i++) {
            key = keys[i];
            callback.call(thisArg, key, obj[key]);
        }

        return obj;
    };

    _.slice = slice;

    _.indexOf = indexOf;

    _.hasOwn = hasOwn;

    _.createElement = function(nodeType, innerHTML, attributes) {
        var node = doc.createElement(nodeType);

        node.innerHTML = innerHTML || '';

        this.forIn(attributes || {}, function(attr, val) {
            node.setAttribute(attr, val);
        });

        return node;
    };

    _.JSONDecode = function(json) {
        try {
            return JSON.parse(json);
        } catch(err) {
            console.error(err);

            return {};
        }
    };

    _.JSONEncode = function(obj) {
        try {
            return JSON.stringify(obj);
        } catch(err) {
            console.error(err);

            return '{}';
        }
    };

    _.supplant = function(str, data) {
        return str.replace(/{{([^{}]*)}}/g, function(a, match) {
            return match in data ? String(data[match]) : match;
        });
    };

    _.use = (function() {
        var types = ['string', 'number', 'boolean', 'undefined', 'function'],
            toString = Object.prototype.toString,
            hasOwn = Object.prototype.hasOwnProperty;

        function inArray(arr, testValue) {
            var i = 0, il = arr.length;

            for (; i < il; i++) {
                if (arr[i] === testValue) return true;
            }

            return false;
        }

        function smartType(testValue) {
            var type = typeof testValue;

            if (inArray(types, type)) return type;
            if (testValue === null) return 'null';
            if (toString.call(testValue) === '[object Array]') return 'array';

            return 'object';
        }

        return function use(target, data) {
            var key, targetVal, dataVal, dataValType, i, il;

            for (key in data) {
                if (!hasOwn.call(data, key)) continue;

                targetVal = target[key];
                dataVal = data[key];
                dataValType = smartType(dataVal);

                switch (smartType(targetVal)) {
                    case 'function':
                        if (dataValType === 'array') {
                            il = dataVal.length;

                            if (il === 0) {
                                targetVal.call(target);
                            } else {
                                for (i = 0; i < il; i++) {
                                    if (smartType(dataVal[i]) === 'array') {
                                        targetVal.apply(target, dataVal[i]);
                                    } else {
                                        targetVal.call(target, dataVal[i]);
                                    }
                                }
                            }
                        } else {
                            targetVal.call(target, dataVal);
                        }

                        break;

                    case 'string':
                    case 'boolean':
                    case 'number':
                    case 'undefined':
                    case 'null':
                        target[key] = dataVal;

                        break;

                    case 'array':
                        if (dataValType === 'array') {
                            targetVal.push.apply(targetVal, dataVal);
                        } else {
                            targetVal.push(dataVal);
                        }

                        break;

                    case 'object':
                        if (dataValType === 'object') {
                            use(targetVal, dataVal);
                        } else {
                            target[key] = dataVal;
                        }

                        break;
                }
            }

            return target;
        };
    }());

    Object.assign = Object.assign || function(target) {
        'use strict';

        var output, index, source, key;

        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        output = Object(target);

        for (index = 1; index < arguments.length; index++) {
            source = arguments[index];

            if (source !== undefined && source !== null) {
                for (key in source) {
                    if (source.hasOwnProperty(key)) {
                        output[key] = source[key];
                    }
                }
            }
        }

        return output;
    };

    return _;
}())));
