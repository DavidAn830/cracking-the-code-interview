// const fn = require("./problems.js");
import * as fn from "./problems.js";
// const jest = require("jest");

describe("Q1. Is Unique", () => {
  const str1 = "abccd";
  const str2 = "abcd";
  test("isUniqueMap", () => {
    expect(fn.isUniqueMap(str1)).toBe(false);
    expect(fn.isUniqueMap(str2)).toBe(true);
  });
  test("isUniqueBooleanMap", () => {
    console.log(str1);
    expect(fn.isUniqueBooleanMap(str1)).toBe(false);
    expect(fn.isUniqueBooleanMap(str2)).toBe(true);
  });
});

describe("Q2. Check Permutation", () => {
  const str1 = "god      ";
  const str2 = "dog";
  test("isPermutation", () => {
    expect(fn.isPermutation(str1, str2));
  });
});

describe("Q3. URLify", () => {
  const str = "Mr John Smith     ";
  const len = 13;
  const expected = "Mr%20John%20Smith";
  test("urlify", () => {
    expect(fn.urlify(str, len)).toBe(expected);
  });
});

describe("Q4. Palindrome Permutation", () => {
  const str = "Tact Coa";
  test("palindromePermutation", () => {
    expect(fn.palindromePermutation(str)).toBe(true);
  });
});

describe("Q5. One Away", () => {
  it("one change away", () => {
    const s1 = "pale";
    const s2 = "bale";
    expect(fn.isOneAway(s1, s2)).toBe(true);
  });
  it("two changes away", () => {
    const s1 = "pale";
    const s2 = "baKe";
    expect(fn.isOneAway(s1, s2)).toBe(false);
  });
});

describe("Q6. String Compression", () => {
  const str = "aaabccdddde";
  const expected = "a3b1c2d4e1";
  expect(fn.compressString(str)).toBe(expected);
});

describe("Q7. Rotate Matrix", () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const expected = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ];
  expect(fn.rotateMatrix(matrix)).toStrictEqual(expected);
});

describe("Q8. Zero Matrix", () => {
  const matrix = [
    [1, 2, 0],
    [0, 5, 6],
    [7, 8, 9],
  ];
  const expected = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 8, 0],
  ];
  expect(fn.zeroMine(matrix)).toStrictEqual(expected);
});

describe("Q9. String Rotation", () => {
  const s1 = "waterbottle";
  const s2 = "erbottlewat";
  expect(fn.isRotation(s1, s2)).toBe(true);
});
