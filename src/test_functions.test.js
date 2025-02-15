import { capitalize } from './test_functions';

describe('Capitalize Tests', () => {
    it('Empty String', () => {
	expect(capitalize('')).toBe('');
    });
    
    it('Lowercase String', () => {
	expect(capitalize('hello')).toBe('Hello');
    });	
});


