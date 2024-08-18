import Seafret from "./seafret.mjs";

const t1 = new Seafret("0.0.1", "example app");

t1
  .invariant("-go", "Tells the Program to Run")
  .invariant("food", "Food couldnt be found")
  .validate(process.argv);

if (!t1.satisfied.food) {
  console.log("invariant: ".concat(t1.invariants.food));
}