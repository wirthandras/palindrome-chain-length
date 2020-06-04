# Palindrome chain length
Demo solution can be found on the “demo_solution” branch.

### Source: 
[https://www.codewars.com/kata/525f039017c7cd0e1a000a26/ruby](https://www.codewars.com/kata/525f039017c7cd0e1a000a26/ruby)
### Dependencies:
- node (version 8)
- JEST (version 25.0.0)

### Technology
- Javascript

## Introduction
Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.

Write a method  `palindrome_chain_length`  which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

## Example
Start with 87:

87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884

4884 is a palindrome and we needed 4 steps to obtain it.

## Note
After you checkout the repo run **npm install**.
You can run the tests with **npm test**