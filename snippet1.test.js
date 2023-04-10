const is_in_asc_order = require('./snippet1');

test('Check is list is in asc order', () => {
    expect(is_in_asc_order([1, 2])).toBe(true); // true
    expect(is_in_asc_order([2, 2])).toBe(true); // true
    expect(is_in_asc_order([1])).toBe(true); // true
    expect(is_in_asc_order([])).toBe(true); // true
    expect(is_in_asc_order([2, 1])).toBe(false);; // false
    expect(is_in_asc_order([1, 2, 3, 4])).toBe(true); // true
    expect(is_in_asc_order([1, 2, 2, 4])).toBe(true); // true
    expect(is_in_asc_order([1, 2, 1, 4])).toBe(false); // false
    expect(is_in_asc_order([4, 2, 3, 4])).toBe(false); // false
});