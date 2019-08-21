"use strict";

const items = [{ w: 3, v: 12 }, { w: 2, v: 10 }, { w: 1, v: 6 }];
const maxWeight = 5;
let recursiveCalls;

function knapsack(items, weight) {
  const cache = {};
  recursiveCalls = 0;
  return recursive(items, weight, 0, cache);
}

function recursive(items, weight, index, cache) {
  if (cache[index]) return cache[index];
  recursiveCalls += 1;
  if (index === items.length) return 0; // Base case - value = 0

  const current = items[index];

  if (weight - current.w < 0)
    // Too much weight
    return recursive(items, weight, index + 1, cache); // skip item

  const result = Math.max(
    recursive(items, weight - current.w, index + 1, cache) + current.v, // include item
    recursive(items, weight, index + 1, cache) // skip item
  );
  cache[index] = result;
  return result;
}

console.log(knapsack(items, maxWeight));
console.log("recursiveCalls", recursiveCalls);
