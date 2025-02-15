import { capitalize } from './test_functions';

test('Empty String', () => {
    expect(capitalize('')).toBe('');
});

test('Lowercase String', () => {
    expect(capitalize('hello')).toBe('Hello');
});
