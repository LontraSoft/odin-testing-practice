import { capitalize, reverseString, Calculator } from './test_functions';

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
});
