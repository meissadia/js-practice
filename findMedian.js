const medianOfSorted = sorted => {
  if (sorted.length === 0) return 0;

  const isEven = sorted.length % 2 === 0;
  const middle = Math.floor(sorted.length / 2);

  if (!isEven) return sorted[middle];
  else return (sorted[middle - 1] + sorted[middle]) / 2;
};

const mergeSortedLinear = (A, B) => {
  if (A.length === 0) return B;
  if (B.length === 0) return A;

  const combined = [];
  let bIdx = 0;
  for (let aIdx = 0; aIdx < A.length; ) {
    // Done with B, add the rest of A
    if (bIdx === B.length) return combined.concat(A.slice(aIdx));

    // Add smallest
    if (A[aIdx] < B[bIdx]) {
      combined.push(A[aIdx]);
      aIdx++;
    } else if (A[aIdx] > B[bIdx]) {
      combined.push(B[bIdx]);
      bIdx++;
    }
    // Add duplicates
    else {
      combined.push(A[aIdx]);
      aIdx++;
      combined.push(B[bIdx]);
      bIdx++;
    }
  }
  // Done with A, add any left from B
  return combined.concat(B.slice(bIdx));
};

/**
 * Calculate the median of two sorted arrays
 * - Possible to do it in log(n)?
 * - Some kind of binary search since arrays are sorted?
 * @param {Number[]} A
 * @param {Number[]} B
 * @return {Number} Median
 */
const findMedian = (A, B) => {
  if (A.length === 0) return medianOfSorted(B);
  if (B.length === 0) return medianOfSorted(A);

  return medianOfSorted(mergeSortedLinear(A, B));
};

const medianCases = [
  { input: [[], []], expected: 0 },
  { input: [[1, 2, 3, 4, 5, 10], []], expected: 3.5 },
  { input: [[], [1, 2, 3, 4, 5, 10]], expected: 3.5 },
  { input: [[2, 4, 5, 10], [1, 3]], expected: 3.5 },
  { input: [[1, 3], [2, 4, 5, 10]], expected: 3.5 },
  { input: [[1, 3], [2]], expected: 2 },
  { input: [[1, 2], [3]], expected: 2 },
  { input: [[1, 3], [2, 4]], expected: 2.5 },
  { input: [[2, 3, 5, 8], [10, 12, 14, 16, 18, 20]], expected: 11 }
];

const sortedCases = [
  { input: [[], []], expected: [] },
  { input: [[1, 2, 3, 4, 5, 10], []], expected: [1, 2, 3, 4, 5, 10] },
  { input: [[], [1, 2, 3, 4, 5, 10]], expected: [1, 2, 3, 4, 5, 10] },
  { input: [[1, 3], [2]], expected: [1, 2, 3] },
  { input: [[1, 2], [3]], expected: [1, 2, 3] },
  { input: [[1, 3], [2, 4]], expected: [1, 2, 3, 4] }
];

const testFunction = (fn, tests, title = "Testing") => {
  console.log(`***** ${title} ******`);
  let result;
  tests.forEach((test, i) => {
    result = fn(test.input[0], test.input[1]);
    if (result.toString() === test.expected.toString())
      console.log(i, "Passed");
    else console.log(i, `Expected: ${test.expected} | Actual: ${result}`);
  });
  console.log("***** END RUN ******\n");
};

testFunction(findMedian, medianCases, `findMedian`);
testFunction(mergeSortedLinear, sortedCases, `mergeSortedLinear`);
