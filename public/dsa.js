(function (root) {
  function mergeSort(items, compare) {
    if (items.length < 2) return items.slice();

    const middle = Math.floor(items.length / 2);
    const left = mergeSort(items.slice(0, middle), compare);
    const right = mergeSort(items.slice(middle), compare);
    const sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (compare(left[leftIndex], right[rightIndex]) <= 0) {
        sorted.push(left[leftIndex++]);
      } else {
        sorted.push(right[rightIndex++]);
      }
    }

    return sorted.concat(left.slice(leftIndex), right.slice(rightIndex));
  }

  class HashTable {
    constructor(bucketCount = 53) {
      this.buckets = Array.from({ length: bucketCount }, () => []);
      this.size = 0;
    }

    hash(key) {
      let value = 2166136261;
      for (let index = 0; index < key.length; index++) {
        value ^= key.charCodeAt(index);
        value = Math.imul(value, 16777619);
      }
      return (value >>> 0) % this.buckets.length;
    }

    set(key, value) {
      const bucket = this.buckets[this.hash(String(key))];
      const existing = bucket.find(entry => entry[0] === key);
      if (existing) {
        existing[1] = value;
      } else {
        bucket.push([key, value]);
        this.size++;
      }
      return this;
    }

    get(key) {
      const entry = this.buckets[this.hash(String(key))].find(item => item[0] === key);
      return entry ? entry[1] : undefined;
    }
  }

  function buildSubstringIndex(items, getText) {
    const index = new HashTable();
    items.forEach(item => {
      const text = getText(item).normalize('NFKC').toLocaleLowerCase();
      const substrings = new Set();
      for (let start = 0; start < text.length; start++) {
        for (let end = start + 1; end <= text.length; end++) {
          substrings.add(text.slice(start, end));
        }
      }
      substrings.forEach(substring => {
        const matches = index.get(substring) || [];
        matches.push(item);
        index.set(substring, matches);
      });
    });
    return index;
  }

  const api = { mergeSort, HashTable, buildSubstringIndex };
  root.PLDSA = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(globalThis);