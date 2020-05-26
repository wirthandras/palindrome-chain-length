var PalindromeLengthChecker = require('../PalindromeLengthChecker');

test('Palindrome chain length', () => {
	var checker = new PalindromeLengthChecker();
	expect(checker.check(87)).toBe(4);
});

test('Palindrome chain length', () => {
	var checker = new PalindromeLengthChecker();
	expect(checker.check(1)).toBe(0);
});

test('Palindrome chain length', () => {
	var checker = new PalindromeLengthChecker();
	expect(checker.check(1221)).toBe(0);
});

test('Palindrome chain length', () => {
	var checker = new PalindromeLengthChecker();
	expect(checker.check(23)).toBe(1);
});

test('Palindrome chain length', () => {
	var checker = new PalindromeLengthChecker();
	expect(checker.check(189)).toBe(2);
});
