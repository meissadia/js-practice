const items = [{ w: 3, v: 12 }, { w: 2, v: 10 }, { w: 1, v: 6 }];
const maxWeight = 5;

/**
 * Return the maximum value up to the given weight
 * @param {Object[]} items
 * @param {Number} items.w Item Weight
 * @param {Number} items.v Item Value
 * @param {Number} weight Maximum allowed weight
 */
function knapsack(items, weight) {
  const cache = {};
  return krecursive(items, weight, 0, cache); // takes a search index
}

function krecursive(items, weight, index, cache) {
  if (cache[index]) return cache[index]; // return already calculated max for this index
  if (index === items.length) return 0; // base case - no items

  const current = items[index];

  if (weight - current.w < 0)
    return krecursive(items, weight, index + 1, cache); // skip this value

  const result = Math.max(
    krecursive(items, weight - current.w, index + 1, cache) + current.v, // include this value
    krecursive(items, weight, index + 1, cache) // exclude this value
  );

  cache[index] = result;
  return result;
}

console.log(knapsack(items, maxWeight));
