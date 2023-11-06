import * as utils from "./utils";

export const isUniqueMap = (str) => {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    if (!map[str.charAt(i)]) {
      map[str.charAt(i)] = 1;
    } else {
      return false;
    }
  }
  return true;
};

export const isUniqueBooleanMap = (str) => {
  if (str.length > 128) return false;
  const boolMap = new Array(128);
  let res = true;
  str.split("").forEach((e) => {
    if (boolMap[e]) {
      res = false;
    }
    boolMap[e] = true;
  });
  return res;
};

export const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let s1 = str1.split("");
  let s2 = str2.split("");
  return s1.sort().toString() === s2.sort().toString();
};

export const urlify = (str, len) => {
  let res = str.substring(0, len);
  res = res.replaceAll(" ", "%20");
  return res;
};

// when a given string, if any permutation of the given string is palindrome, it is palindrome permutation
// ex: 'Tact Coa' => true (permutation: 'taco cat', 'atco cta')
// it is palindrome permuation when the given string has a one odd count of a character or all even counts of the characters
export const palindromePermutation = (str) => {
  // sanitize str
  const strArr = str.replaceAll(" ", "").toLowerCase().split("");
  // create a map of each chars in the str -- alpha: count
  const map = {};
  strArr.forEach((e) => {
    if (!map[e]) {
      map[e] = 1;
    } else {
      map[e]++;
    }
  });
  // check values and confirm that there is only 1 odd number.
  const res = Object.values(map).filter((e) => e % 2 == 1);
  return res.length <= 1;
};

export const isOneAway = (s1, s2) => {
  if (s1.length === s2.length) {
    return utils.isReplaced(s1, s2);
  } else if (s1.length + 1 === s2.length) {
    return utils.isInserted(s1, s2);
  } else if (s1.length - 1 === s2.length) {
    return utils.isRemoved(s1, s2);
  } else {
    return false;
  }
};

export const compressString = (str) => {
  let compressed = "";
  for (let i = 0; i < str.length; i++) {
    compressed += str.charAt(i);
    let count = 1;
    while (str.charAt(i) === str.charAt(i + 1)) {
      count++;
      i++;
    }
    compressed += count;
  }
  return compressed.length < str.length ? compressed : str;
};

// const str = "aaabccdddde";
// console.log(compressString(str));

/**
 * 1 2 3   7 4 1
 * 4 5 6   8 5 2
 * 7 8 9   9 6 3
 *
 * row becomes column
 * and reverse
 */
export const rotateMatrix = (matrix) => {
  let rotated = utils.transpose(matrix);
  rotated = utils.flip(rotated);
  return rotated;
};

export const zeroMine = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;
  let row = new Array(m);
  let col = new Array(n);
  for (let i = 0; i < m; i++) {
    for (let k = 0; k < n; k++) {
      if (matrix[i][k] === 0) {
        // mark it
        row[i] = true;
        col[k] = true;
      }
    }
  }
  for (let i = 0; i < row.length; i++) {
    if (row[i]) matrix = utils.nullifyRow(matrix, i);
  }
  for (let i = 0; i < col.length; i++) {
    if (col[i]) matrix = utils.nullifyCol(matrix, i);
  }
  return matrix;
};

export const isRotation = (s1, s2) => {
  if (s1.length === s2.length && s1.length > 0) {
    const s1s1 = s1 + s1;
    return s1s1.includes(s2);
  }
  return false;
};
