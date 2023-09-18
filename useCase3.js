/**
 * Use case 3
 * Identification of a object
 * The same nature of a object depend on the comportment of a object in OOP
 * Here we verify the version of the object by checking if the symbol is the same even if the class changes or add some methods or properties 
 */

const kSymAddon = Symbol.for("addon");

class Addon {
  static isAddon(addon) {
    return Boolean(addon[kSymAddon]);
  }
  constructor() {
    Object.defineProperty(this, kSymAddon, {
      value: true,
      enumerable: false,
      writable: false,
    });
  }
}

console.log(Addon.isAddon(new Addon()))