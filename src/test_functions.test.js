import {
    capitalize,
    reverseString,
    Calculator,
    caesarCipher,
    analyzeArray,
} from './test_functions';

describe('Capitalize Tests', () => {
    it('Empty String', () => {
	expect(capitalize('')).toBe('');
    });
    
    it('Lowercase String', () => {
	expect(capitalize('hello')).toBe('Hello');
    });	
});

describe('ReverseString Tests', () => {
    it('Empty String', () => {
	expect(reverseString('')).toBe('');
    });

    it('Hello', () => {
	expect(reverseString('hello')).toBe('olleh');
    });

    it('Handles Space', () => {
	expect(reverseString('hello world')).toBe('dlrow olleh');
    });
});

describe('Calculator Tests', () => {
    const calculator = new Calculator();

    describe('Add Tests', () => {
	it('Add 0', () => {
	    expect(calculator.add(2, 0)).toBe(2);
	});
	
	it('Add 4 12', () => {
	    expect(calculator.add(4, 12)).toBe(16);
	});
	
	it('Add Negative Number', () => {
	    expect(calculator.add(2, -2)).toBe(0);
	});

	it('Add To Negative', () => {
	    expect(calculator.add(2, -4)).toBe(-2);
	})
    });

    describe('Subtract Tests', () => {
	it('Subtract 0', () => {
	    expect(calculator.subtract(2, 0)).toBe(2);
	});

	it('Subtract 12 4', () => {
	    expect(calculator.subtract(12, 4)).toBe(8);
	});

	it('Subtract To Negative', () => {
	    expect(calculator.subtract(2, 4)).toBe(-2);
	});

	it('Subtract Negative Number', () => {
	    expect(calculator.subtract(2, -2)).toBe(4);
	});
    });

    describe('Multiply Tests', () => {
	it('Multiply 0', () => {
	    expect(calculator.multiply(2, 0)).toBe(0);
	});

	it('Multiply 1', () => {
	    expect(calculator.multiply(2, 1)).toBe(2);
	});

	it('Multiply 4 12', () => {
	    expect(calculator.multiply(4, 12)).toBe(48);
	});

	it('Multiply Negative Number', () => {
	    expect(calculator.multiply(2, -2)).toBe(-4);
	});

	it('Multiply 2 Negatives', () => {
	    expect(calculator.multiply(-2, -2)).toBe(4);
	});
    });

    describe('Divide Tests', () => {
	it('Divide By 1', () => {
	    expect(calculator.divide(2, 1)).toBe(2);
	});

	it('Divide 12 4', () => {
	    expect(calculator.divide(12, 4)).toBe(3);
	});

	it('Divide By Negative Number', () => {
	    expect(calculator.divide(2, -2)).toBe(-1);
	});

	it('Divide 2 Negatives', () => {
	    expect(calculator.divide(-2, -2)).toBe(1);
	});

	it('Divide By 0', () => {
	    expect(calculator.divide(2, 0)).toBe(Infinity);
	});
    });
});

describe('CaesarCipher Tests', () => {
    it('Empty String', () => {
	expect(caesarCipher('', 1)).toBe('');
    });

    it('Lowercase Letter', () => {
	expect(caesarCipher('a', 1)).toBe('b');
    });

    it('Capital Letter', () => {
	expect(caesarCipher('A', 1)).toBe('B');
    });

    it('Punctuation Character', () => {
	expect(caesarCipher('!', 1)).toBe('!');
    });

    it('Hello', () => {
	expect(caesarCipher('Hello', 1)).toBe('Ifmmp');
    });

    it('Overflow Wrap Lowercase', () => {
	expect(caesarCipher('z', 1)).toBe('a');
    });

    it('Overflow Wrap Uppercase', () => {
	expect(caesarCipher('Z', 1)).toBe('A');
    });

    it('Wraparound Lowercase', () => {
	expect(caesarCipher('a', 26)).toBe('a');
    });

    it('Wraparound Uppercase', () => {
	expect(caesarCipher('A', 26)).toBe('A');
    });

    it('Mixed Case', () => {
	expect(caesarCipher('Hello World', 1)).toBe('Ifmmp Xpsme');
    });

    it('With Whitespace', () => {
	expect(caesarCipher('  Hello  World   ', 1)).toBe('  Ifmmp  Xpsme   ');
    });
});

describe('Analyze Array Tests', () => {
    it('Reports 0 For Empty Array', () => {
	let result = analyzeArray([]);
	expect(result.average).toBe(0);
	expect(result.min).toBe(0);
	expect(result.max).toBe(0);
	expect(result.length).toBe(0);
    });

    it('Reports x For Array Of [x]', () => {
	let result = analyzeArray([1]);
	expect(result.average).toBe(1);
	expect(result.min).toBe(1);
	expect(result.max).toBe(1);
	expect(result.length).toBe(1);
    });

    it('Length Test', () => {
	let result = analyzeArray([1, 2, 3, 4, 5, 6]);
	expect(result.length).toBe(6);
    });

    it('Min Test', () => {
	let result = analyzeArray([1, -2, 3, 24]);
	expect(result.min).toBe(-2);
    });

    it('Max Test', () => {
	let result = analyzeArray([1, -2, 24, 3]);
	expect(result.max).toBe(24);
    });

    it('Average Test', () => {
	let result = analyzeArray([1, 2, 3, 4, 5]);
	expect(result.average).toBe(3);
    });

    it('[1, 8, 3, 4, 2, 6]', () => {
	let result = analyzeArray([1, 8, 3, 4, 2, 6]);
	expect(result.average).toBe(4);
	expect(result.min).toBe(1);
	expect(result.max).toBe(8);
	expect(result.length).toBe(6);
    });
});
