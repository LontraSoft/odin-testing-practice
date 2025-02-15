import { capitalize, reverseString } from './test_functions';

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
