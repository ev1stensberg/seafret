# Seafret - Minimal Invariant CLI parser

`npm install --save seafret`

# Example

## console
```console
node ./cli.mjs
```

## cli.mjs
```js
import Seafret from "./seafret.mjs";

const cli = new Seafret("0.0.1", "example app");

cli
  .invariant("-go", "Tells the Program to Run")
  .invariant("food", "Food couldnt be found")
  .validate(process.argv);

if (!cli.satisfied.food) {
  console.log("invariant!: ".concat(cli.invariants.food));
  // outputs daym: Food couldnt be found
}
```
