function reverseString(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  return str === reverseString(str);
}

let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");


console.log("Original word 1:", word1);
console.log("Reversed word 1:", reverseString(word1));
console.log("Is word 1 a palindrome?", isPalindrome(word1));

console.log("Original word 2:", word2);
console.log("Reversed word 2:", reverseString(word2));
console.log("Is word 2 a palindrome?", isPalindrome(word2));
