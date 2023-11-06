export const isReplaced = (s1, s2) => {
  let replaced = false;
  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) != s2.charAt(i)) {
      if (!replaced) {
        replaced = true;
      } else {
        return false;
      }
    }
  }
  return replaced;
};

// aple -> apple
export const isInserted = (s1, s2) => {
  let index1 = 0;
  let index2 = 0;
  while (index1 < s1.length && index2 < s2.length) {
    if (s1.charAt(index1) != s2.charAt(index2)) {
      if (index1 != index2) {
        return false;
      }
      index2++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
};

export const isRemoved = (s1, s2) => {
  let index1 = 0;
  let index2 = 0;
  while (index1 < s1.length && index2 < s2.length) {
    if (s1.charAt(index1) != s2.charAt(index2)) {
      if (index1 != index2) {
        return false;
      }
      index1++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
};

export const transpose = (matrix) => {
  const transposed = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
};

export const flip = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = Object.values(matrix[i]).reverse();
  }
  return matrix;
};

export const nullifyRow = (matrix, row) => {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }

  return matrix;
};

export const nullifyCol = (matrix, col) => {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[i][col] = 0;
  }

  return matrix;
};
