function output_main_meta(name, version) {
  process.stdout.write("tool: ".concat(name).concat("\n"));
  process.stdout.write("version: ".concat(version).concat("\n"));
}

function output_invariants_table(key, value) {
  const line = `\tFlag: ${key}\t` + `description: <${value}>\n`;
  process.stdout.write(line);
}

export default class {
  name = new String("invariant application");
  version = new String("No version specified");
  invariants = new Object();
  satisfied = new Object();

  constructor(ver, name) {
    if (ver) this.version = ver;
    if (name) this.name = name;
  }

  get version() {
    return this.version;
  }
  get name() {
    return this.name;
  }

  invariant(flag, desc) {
    this.invariants[flag] = desc;
    return this;
  }
  name() {
    process.stdout.write(this.name.concat("\n"));
    return this;
  }
  version() {
    process.stdout.write(this.version.concat("\n"));
    return this;
  }

  help() {
    if (Object.keys(this.invariants) >= 0) {
      output_main_meta(this.name, this.version);
      return this;
    }

    process.stdout.write("\n\t\tInvariants:\n\n");
    for (let k in this.invariants) {
      output_invariants_table(k, this.invariants[k]);
    }
    process.stdout.write("\n");
    return this;
  }

  validate(argv) {
    argv.forEach((arg) => {
      if (this.invariants[arg]) this.satisfied[arg] = true;
    });
    return this;
  }
}
