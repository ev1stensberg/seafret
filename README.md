# Seafret - Minimal Invariant CLI parser

`npm install --save seafret`

# Example

```js
import Seafret from "seafret";
const cli = new Seafret("2.0.0");
cli
  .option("-go", "Tells the Program to Run")
  .option("food", "Food couldnt be found")
  .send(process.argv);

if (!cli.satisfied.food) {
  console.log("daym: ".concat(cli.invariants.food));
}
```
