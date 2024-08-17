import { describe, it } from "node:test";
import assert from "node:assert";
import Seafret from "./seafret.mjs";

describe("Version variants should be ok", (t) => {
  it("should render undefined version", () => {
    const t1 = new Seafret();
    assert.equal(t1.version, "No version specified");
  });

  it("should render a defined version", () => {
    const t2 = new Seafret("0.0.1");
    assert.equal(t2.version, "0.0.1");
  });
});

describe("Name variants should be ok", (t) => {
  it("should output all flags when help is invoked", () => {
    const t3 = new Seafret("0.0.1", "groot");
    assert.equal(t3.name, "groot");
  });
  it("should have default name", () => {
    const t4 = new Seafret("0.0.1");
    assert.equal(t4.name, "invariant application");
  });
});

describe("Help should output invariants", (t) => {
  it("show invariants", () => {
    const t5 = new Seafret("0.0.1", "evenstensberg");
    t5.invariant("--foo", "1").invariant("--bar", "2").send(process.argv);
    // todo snapshot
    assert.ok(t5.help());
  });
});
