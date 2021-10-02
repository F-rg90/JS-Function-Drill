// 1- What is the difference between a parameter and an argument?

//A parameter is a var in the declaration of a function.
//An argument is the value that gets passed into a function.

//2- Within a function, what is the difference between return and console.log?

//return is a statement which lets a function return a value back to where it was called.
// console.log lets us debug errors

//Palindrome
//Write a function checkPalindromethat accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
alert(palindrome("Radar"));

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
alert(palindrome("Borscht"));