import add from './functions/add';
import multiply from "./functions/multiply";
import cube from "./functions/cube";

test('1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('2 ** 3 to equal 8', () => {
  expect(cube(2)).toBe(8);
});
