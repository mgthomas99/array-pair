[circleci-url]: https://circleci.com/gh/mgthomas99/array-pair
[circleci-shield-url]: https://img.shields.io/circleci/project/github/mgthomas99/array-pair.svg
[npm-url]: https://www.npmjs.com/package/array-pair
[npm-shield-url]: https://img.shields.io/npm/v/array-pair.svg
[license-url]: https://github.com/mgthomas99/array-pair/blob/master/LICENSE
[license-shield-url]: https://img.shields.io/npm/l/array-pair.svg

array-pair
==========

[![NPM][npm-shield-url]][npm-package-url]
[![NPM][license-shield-url]][license-url]
[![CircleCI][circleci-shield-url]][circleci-url]

JavaScript array pairing and merging function written in TypeScript with 100%
code coverage and strict typing definitions.

## Usage

```sh
    npm install array-pair --save
```

```js
    var expect = require("chai").expect;
    var pair = require("array-pair");

    var names = [ "Bob", "John", "Joe" ];
    var ages = [ 43, 28, 21 ];
    var merged = pair(names, ages);

    expect(merged).to.deep.equals([
        [ "Bob", 43 ],
        [ "John", 28 ],
        [ "Joe", 21 ]
    ]);
```

## Build & Develop

```sh
    npm run build # Invoke the build process via NPM script proxy.
    gulp build # Invoke the build process directly via Gulp.
```

### Testing

`array-pair` uses a combination of `mocha` and `chai` for local code tests, and
CircleCI for continuous integration.

`array-pair` is written in TypeScript, but its tests are written in JavaScript
as this removes dependencies and makes continuous integration much easier. The
disadvantage is that this requires `array-pair` to be built before it can be
tested.

To test `array-pair`, run the following npm script:

```sh
    npm test
```

The command will invoke the build process and await its completion before
executing the tests. The tests will emit coverage reports and temporary
information to files in the folders `.nyc_output/` and `coverage/` for upload
to a code coverage manager such as CodeCov.

## License

See the `LICENSE` file for license information.
