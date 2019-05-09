# From builder


Build an HTML form with drag & drop, edit your inputs, save/restore the result.
No dependencies, IE9+ support.

Created at [P4IT](http://www.pappco.hu/) for the project [PAM](https://mossbourne.mosspam.org/).

**Examples**

Basic usage:
```javascript
new FormBuilder('#wrapper');
```

Create custom fields:
```javascript
FormBuilder.createFieldType('Link', function(inputs) {
    this.templateData = {
        text: new inputs.text('Text', 'click here'),
        href: new inputs.text('Link', 'https://github.com/bokodi-archive'),
        target: new inputs.radio('Target', '_blank', [
            { label: 'self', value: '_self' },
            { label: 'blank', value: '_blank' },
            { label: 'parent', value: '_parent' },
            { label: 'top', value: '_top' }
        ])
    };

    this.setTemplate('<a href="{{href}}" target="{{target}}" onclick="return false;">{{text}}</a>');
});
```

Event listeners:
```javascript
var fb = new FormBuilder('#wrapper');

fb.on(FormBuilder.EVENT_ADD_FIELD, function (e) {
    console.log(e.target, 'field added');
});

fb.on(FormBuilder.EVENT_EDIT_FIELD, function (e) {
    console.log(e.target, 'field saved');
});

fb.on(FormBuilder.EVENT_REMOVE_FIELD, function (e) {
    console.log(e.target, 'field removed');
});

fb.on(FormBuilder.EVENT_MOVE_FIELD, function (e) {
    console.log(e.target, 'field moved');
});
```

Save/restore data:
```javascript
var fb = new FormBuilder('#wrapper');

document.getElementById('saveButton').addEventListener('click', function() {
    var data = fb.getJSONData();

    window.localStorage.setItem('fb_data', data);
});

document.getElementById('restoreButton').addEventListener('click', function() {
    var data = window.localStorage.getItem('fb_data');

    fb.setJSONData(data);
});
```
