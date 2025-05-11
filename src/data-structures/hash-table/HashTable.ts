export class HashTable<Key_Type extends string, Value_Type> {
  keyMap: Array<Array<[Key_Type, Value_Type]>>;

  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key: Key_Type) {
    let total = 0;
    const WEIRD_PRIME = 31;
    // points to the character code of the first character in the string
    for (const char of key) {
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key: Key_Type, value: Value_Type) {
    const index = this._hash(key);
    this.keyMap[index] = this.keyMap[index] || [];
    this.keyMap[index].push([key, value]);
  }

  get(key: Key_Type) {
    const index = this._hash(key);
    if (!this.keyMap[index]) return undefined;
    return this.keyMap[index].find(([k]) => k === key);
  }

  keys() {
    const keys = [];
    for (const key of this.keyMap) {
      if (key) {
        for (const [k] of key) {
          keys.push(k);
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (const key of this.keyMap) {
      if (key) {
        for (const [, v] of key) {
          values.push(v);
        }
      }
    }
    return values;
  }
}
