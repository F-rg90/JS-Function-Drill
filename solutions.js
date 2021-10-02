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

//Sum Array
//Write a function sumArraythat takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Use a for loop within the function to iterate over the array and sum the contents. Use a variable such as

const sumArray = [1,2,3,4,5,6].reduce((partial_sum, a) => partial_sum + a,0); 
console.log(sumArray);



// Prime Numbers
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.

// Step One
// Write a function called checkPrimethat will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.

// Hint: Check every number up to the square root. To do this, try a for loop.

// Step Two
// Write another function called printPrimesthat will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97.

// This function can call on the previous checkPrimefunction.

function checkPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

console.log(checkPrime(2))

function printPrimes(max) {
  var sieve = [], i, j, primes = [];
  for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
          // i has not been marked -- it is prime
          primes.push(i);
          for (j = i << 1; j <= max; j += i) {
              sieve[j] = true;
          }
      }
  }
  return primes;
}

console.log(printPrimes(100))



// Rock Paper Scissors
// Create the rock paper scissors game for the console! Rock paper scissors is a game of chance where two players throw out one of the three options, rock, paper, or scissors. To determine who wins, use the following guidelines: rock beats scissors, scissors beats paper, paper beats rock.

// Write a function called randomMovethat returns a randomly chosen move (rock, paper, or scissors).
// Then create a function called rockPaperScissorsthat runs one round of the game. It should accept two arguments, the computer's move and the user's move, and somehow compare the two to decide who the winner is and return who won.


let computerScore = 0, humanScore = 0

let rockPaperScissors = prompt("rock, paper, scissors")

console.log("human chose ", rockPaperScissors)

let options = ["rock", "paper", "scissors"]

let randomMove = options[Math.floor(Math.random() * options.length)]

console.log("computer chose ", randomMove)

if (rockPaperScissors == "rock" && randomMove == "paper") {

console.log("paper beats rock! You lost this round.");

computerScore += 1;

console.log("Computer: " + computerScore + " You: " + humanScore);

} else if (rockPaperScissors == "rock" && randomMove == "scissors") {

console.log("rock beats scissors! You won this round.");

humanScore += 1;

console.log("Computer: " + computerScore + " You: " + humanScore);

} else if (rockPaperScissors == "rock" && randomMove == "rock") {

console.log("There was a tie");

console.log("Computer: " + computerScore + " You: " + humanScore);

}