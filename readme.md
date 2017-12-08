# is-offline [![Build Status](https://travis-ci.org/lukeed/is-offline.svg?branch=master)](https://travis-ci.org/lukeed/is-offline)

> A tiny (276B) library to detect `offline` status & respond to changes in the browser.

This module exposes three module definitions:

* **ES Module**: `dist/is-offline.es.js`
* **CommonJS**: `dist/is-offline.js`
* **UMD**: `dist/is-offline.min.js`

If using the UMD bundle, the library is exposed as `is-offline` globally.


## Install

```
$ npm install --save is-offline
```


## Usage

```js
import { check, watch } from 'is-offline';

let foobar = bool => console.log('Am I offline?', bool);

// Check if currently offline
check().then(foobar);

// Setup a "watcher" to respond to all online/offline changes
let unwatch = watch(foobar);

// The "watcher" will be active until it's deactivated
unwatch();
```

## API

### isOffline()

Returns: `Promise`

Resolves a `Boolean` to indicate offline status. For clarity, `true` means that you are offline.

### isOffline.watch(fn)

Returns: `Function`

Returns a function that is used to disable/unmount the event listeners.

#### fn

Type: `Function`

The function to run whenever the network status changes. It receives a `Boolean` value, just like [`isOffline`](#isoffline).


## License

MIT © [Luke Edwards](https://lukeed.com)
