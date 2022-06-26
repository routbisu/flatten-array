const flatten = require('./flatten')

test('flatten array: one nested level', () => {
  expect(flatten([1, 2, [3, 4]])).toBe([1, 2, 3, 4])
})

test('flatten array: multiple nested levels', () => {
  expect(flatten([1, 2, [3, 4, [5, 6]], 7])).toBe([1, 2, 3, 4, 5, 6, 7])
})

test('flatten array: already flat array', () => {
  expect(flatten([1, 2, 3, 4])).toBe([1, 2, 3, 4])
})

test('flatten array: empty array', () => {
  expect(flatten([])).toBe([])
})
