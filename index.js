function isPalindrome(word) {
  const cleanedWord = word.replace(/\s/g, "").toLowerCase(); 
  const length = cleanedWord.length;
  for (let i = 0; i < length / 2; i++) {
    if (cleanedWord[i] !== cleanedWord[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
console.log("=>", isPalindrome("level"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("useful"));
console.log("Expecting: true");
console.log("=>", isPalindrome("radar"));
}

module.exports = isPalindrome;
