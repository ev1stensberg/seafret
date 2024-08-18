# Seafret - Minimal Invariant CLI parser

`npm install --save seafret`

# Example

```js
import Seafret from "./seafret.mjs";

const cli = new Seafret("0.0.1", "example app");

cli
  .invariant("-go", "Tells the Program to Run")
  .invariant("food", "Food couldnt be found")
  .send(process.argv);

if (!cli.satisfied.food) {
  console.log("daym: ".concat(cli.invariants.food));
}
```
