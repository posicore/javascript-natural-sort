# Status of this module

This module is deprecated. Please use [natural-orderby](https://www.npmjs.com/package/natural-orderby) instead. It is more mature, performant and offers additional-features.

# node-natural-sort

> A Node.js package containing a fast and lightweight function to be used in conjunction with Array.prototype.sort() or likewise functions of other (immutable) data structures using the default bubble sort. This will properly sort padded numbers, numbers preceding text, dates, floats, unicode, etc.
> Written in ES6, transpiled to ES5, includes unit tests using Mocha and Chai and code coverage using Istanbul.

## Install

```
npm install node-natural-sort
```

## API

### naturalSort()

Returns a compare function that defines the sort order due to the given `options`.

```javascript
naturalSort(options?: {[key: string]: V}): comparator: (valueA: V, valueB: V) => number
```

#### JSON Schema for `options` parameter

```json
{
  "properties": {
      "caseSensitive": {
        "type": "boolean"
      },
      "order": {
        "enum": [ "ASC", "DESC" ]
      }
  },
  "additionalProperties": false
}
```

##### caseSensitive

Compare items case-sensitive.
Defaults to `true`.

##### order

Sorting in ascending or descending order.
Defaults to `"ASC"`.

#### Examples

##### Simple numerics

```javascript
['10', 9, 2, '1', '4'].sort(naturalSort())
// ['1', 2, '4', 9, '10']
```

##### Floats

```javascript
['10.0401', 10.022, 10.042, '10.021999'].sort(naturalSort())
// ['10.021999', 10.022, '10.0401', 10.042]
```

##### Float & decimal notation

```javascript
['10.04f', '10.039F', '10.038d', '10.037D'].sort(naturalSort())
// ['10.037D', '10.038d', '10.039F', '10.04f']
```

##### Scientific notation

```javascript
['1.528535047e5', '1.528535047e7', '1.528535047e3'].sort(naturalSort())
// ['1.528535047e3', '1.528535047e5', '1.528535047e7']
```

##### IP addresses

```javascript
['192.168.0.100', '192.168.0.1', '192.168.1.1'].sort(naturalSort())
// ['192.168.0.1', '192.168.0.100', '192.168.1.1']
```

##### Filenames

```javascript
['car.mov', '01alpha.sgi', '001alpha.sgi', 'my.string_41299.tif'].sort(naturalSort())
// ['001alpha.sgi', '01alpha.sgi', 'car.mov', 'my.string_41299.tif']
```

##### Dates

```javascript
['10/12/2008', '10/11/2008', '10/11/2007', '10/12/2007'].sort(naturalSort())
// ['10/11/2007', '10/12/2007', '10/11/2008', '10/12/2008']

['Mon, 15 Jun 2009 20:45:30 GMT', 'Mon, 3 May 2010 17:45:30 GMT', 'Mon, 15 Jun 2009 17:45:30 GMT'].sort(naturalSort())
// ['Mon, 15 Jun 2009 17:45:30 GMT', 'Mon, 15 Jun 2009 20:45:30 GMT', 'Mon, 3 May 2010 17:45:30 GMT']
```

##### Money

```javascript
['$10002.00', '$10001.02', '$10001.01'].sort(naturalSort())
// ['$10001.01', '$10001.02', '$10002.00']
```

##### By default - case-sensitive sorting

```javascript
['A', 'b', 'C', 'd', 'E', 'f'].sort(naturalSort());
// ['A', 'C', 'E', 'b', 'd', 'f']
```

##### To enable case-insensitive sorting

```javascript
['A', 'C', 'E', 'b', 'd', 'f'].sort(naturalSort({caseSensitive: false}));
// ['A', 'b', 'C', 'd', 'E', 'f']
```

##### By default - ascending order

```javascript
['a', 'c', 'f', 'd', 'e', 'b'].sort(naturalSort());
// ['a', 'b', 'c', 'd', 'e', 'f']
```

##### To enable descending order

```javascript
['a', 'c', 'f', 'd', 'e', 'b'].sort(naturalSort({order: 'DESC'}));
// ['f', 'e', 'd', 'c', 'b', 'a']
```

## Development

The following gulp tasks are provided.

### Test

```
gulp test
```

Execute Mocha/Chai tests and process code coverage recording using Istanbul.

### TDD

```
gulp tdd
```

Watch changes, execute Mocha/Chai tests and process code coverage recording using Istanbul.

### Build (default task)

```
gulp
```

Transpile the source. (Run primarily by npm during the prepublish step)

##Credits

Based on [javascript-natural-sort](https://github.com/overset/javascript-natural-sort) by Jim Palmer.

## License

[MIT](LICENSE.md) © [Olaf Ennen](https://github.com/yobacca)
