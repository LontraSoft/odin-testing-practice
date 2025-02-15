export function capitalize(string) {
    if(!string) {
	return string;
    }
    
    return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    return string.split('').reverse().join('');
}

export class Calculator {
    add(x, y) {
	return x + y;
    }
    
    subtract(x, y) {
	return x - y;
    }

    multiply(x, y) {
	return x * y;
    }

    divide(x, y) {
	return x / y;
    }
}

function shiftChar(char, shift) {
    const NUMBER_OF_LETTERS = 26;
    const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
    const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let isLowerCase = char.match(/[a-z]/);
    let isUpperCase = char.match(/[A-Z]/);

    if (!isLowerCase && !isUpperCase) {
	return char;
    }

    let shiftString = (isLowerCase) ? LOWERCASE_LETTERS : UPPERCASE_LETTERS;
    let index = shiftString.indexOf(char);
    let newIndex = (index + shift) % NUMBER_OF_LETTERS;
    return shiftString[newIndex];
}

export function caesarCipher(string, shift) {
    if (!string) {
	return string;
    }

    let result = '';

    string.split('').forEach((char) => {
	result += shiftChar(char, shift);
    });

    return result;
}
