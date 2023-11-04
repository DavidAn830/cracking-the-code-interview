const isUniqueMap = (str) => {
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

const isUniqueBooleanMap = (str) => {
  if (str.length > 128) return false;
  const boolMap = new Array(128);
  boolMap.forEach((e) => {
    if (boolMap[e]) {
      return false;
    }
    boolMap[e] = true;
  });
  return true;
};

// const str1 = "abccd";
// const str2 = "abcd";
// console.log("expected: false", isUniqueMap(str1));
// console.log("expected: true", isUniqueBooleanMap(str2));

const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let s1 = str1.split("");
  let s2 = str2.split("");
  return s1.sort().toString() === s2.sort().toString();
};

// const str1 = "god      ";
// const str2 = "dog";
// console.log(checkPermutation(str1, str2));

const urlify = (str, len) => {
  let res = str.substring(0, len);
  res = res.replaceAll(" ", "%20");
  return res;
};

// const str = "Mr John Smith     ";
// const len = 13;
// console.log(urlify(str, len));

// when a given string, if any permutation of the given string is palindrome, it is palindrome permutation
// ex: 'Tact Coa' => true (permutation: 'taco cat', 'atco cta')
// it is palindrome permuation when the given string has a one odd count of a character or all even counts of the characters
const palindromePermutation = (str) => {
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
  // console.log(Object.values(map));
  // check values and confirm that there is only 1 odd number.
  const res = Object.values(map).filter((e) => e % 2 == 1);
  return res.length <= 1;
};

const str = "Tact Coa";
console.log(palindromePermutation(str));
