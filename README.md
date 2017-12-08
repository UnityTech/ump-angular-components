# UMP Angular Components

## Basics

Build the project
```
npm run build
```

# Publishing to NPM

To achieve a flat file structure without complicated scripting, we don't leverage `npm prepublish`, which is automatically executed every time `npm publish` is run. This means the process for releasing new versions requires we run:

```
npm run prepublish:build
npm publish --tag VERSION
```

## Principles

* Localization-ready
* Responsive & touch device friendly
* Simple declarative component APIs vs intricate HTML markup

## Browser Support

* Latest 2 versions of Chrome and Firefox
* Safari 9+

## Dependencies

* Angular 1.5+
* Angular Material 1.1+
