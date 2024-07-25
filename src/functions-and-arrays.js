// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  let longestWordLength = 0;
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    const oneWord = words[i];

    if (words.length === 0) {
      return null;
    }

    if (oneWord.length > longestWordLength) {
      longestWordLength = oneWord.lenght;
      longestWord = oneWord;
    }
    return longestWord;
  }
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) {
    return 0;
  }
  let total = 0;
  for (const number of arrayOfNumbers) {
    total += number;
  }
  return total;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) {
    return 0;
  }
  const total = sumNumbers(arrayOfNumbers);
  const average = (total / arrayOfNumbers.length).toFixed(2);
  return Number(average);
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arrayOfWords, searchedWord) {
  if (arrayOfWords.length === 0) {
    return null;
  }
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (searchedWord !== arrayOfWords[i]) {
      return false;
    } else {
      return true;
    }
  }
}
