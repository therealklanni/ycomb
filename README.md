# Y-combinator

The Y-combinator can be used to create functions that behave recursively.

```js
// recursive factorial
let fact = n => n <= 1 ? n : n * fact(n - 1)

// factorial using the Y-combinator
let fact = Y(f => n => n <= 1 ? n : n * f(n - 1))
```

> **Read more about the Y-combinator in [The Mysterious Y-combinator](https://medium.com/@therealklanni/the-mysterious-y-combinator-e824bebf8c96)**

## Install

```
npm install --save ycomb
```

## Use

```js
import Y from 'ycomb'
```

Pass a function to `Y` that takes a function argument. Call the function argument if you want to recurse.

For an example, check out [Yl](https://github.com/therealklanni/yl), a function that behaves like a `while` loop (with some added benefits like currying, and return values).

## License

MIT © Kevin Lanni
