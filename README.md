# appendContent.js

A jQuery plugin that appends some content an element and adds a class. If the element already has the class, it does nothing. Could be useful in situations where it's not feasible to edit the markup, or you've added some generated content using a pseudo element and need it to actually be in the DOM for screen readers.

## How to use

```sh
npm install --save append-content
```

```javascript
$('.required').appendContent({
  className: 'required--injected',
  content: '<span class="injected-text">(required)</span>',
});
```

## Options

It accepts an object with options.

| Option  | Description | Required? |
| ------------- | ------------- | ------------- |
| className | Class name to apply once the content is appended | Required |
| content | The content to append | Required |
