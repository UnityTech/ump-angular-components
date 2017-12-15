# UMP Angular Components

## Basics

Install with:

```
npm install -SE @unity-ads/ump-angular-components
```

**You need to import both JS and CSS files for the components to look and work properly**

**Importing JS**

```
// Import all components
import umpComponents from '@unity-ads/ump-angular-components'

// Import a single component
import umpSidenav from '@unity-ads/ump-angular-components/sidenav'
```

Add imported module into angular dependencies:
```
angular.module('myApp', [
  umpComponents,
])
```

**Importing CSS**

```
/* In your app.scss. The path to node_modules might differ */
@import "../../node_modules/@unity-ads/ump-angular-components/sidenav.css"
```

Build the project
```
npm run build
```

## Documentation website

Navigate to `./docs` and run `npm install`.

Start development server at https://localhost:8888

```
npm start
```

Documentation website is also used for ongoing feature development of library components. When documentation app is run locally, changes to files in root `./src` will be reflected in the browser.

Build and deploy the website
```
npm run build
npm run deploy
```

## Publishing to NPM

To achieve a flat file structure without complicated scripting, we don't leverage `npm prepublish`, which is automatically executed every time `npm publish` is run. This means the process for releasing new versions requires that we:

1. Update `version` in package.json (and commit it)
2. Build and publish the package
```
npm run prepublish:build
npm publish ./build --access public
```

## Principles

* Localization-ready
* Responsive & touch device friendly
* Simple declarative component APIs vs intricate HTML markup

## Browser Support

* Latest 2 versions of Chrome and Firefox
* Safari 9+

## Dependencies

* Angular 1.5 / 1.6
* Angular Material 1.1+
