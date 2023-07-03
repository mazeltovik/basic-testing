// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 2, b: 3, action: Action.Subtract, expected: -1 },
  { a: 5, b: 10, action: Action.Subtract, expected: -5 },
  { a: 6, b: 10, action: Action.Subtract, expected: -4 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 3, b: 3, action: Action.Multiply, expected: 9 },
  { a: 3, b: 4, action: Action.Multiply, expected: 12 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 12, b: 2, action: Action.Divide, expected: 6 },
  { a: 14, b: 2, action: Action.Divide, expected: 7 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 4, b: 2, action: Action.Exponentiate, expected: 16 },
  { a: 3, b: 4, action: 'Invalid Operation', expected: null },
  { a: 4, b: 4, action: 'Invalid Operation', expected: null },
  { a: 13, b: 4, action: 'Invalid Operation', expected: null },
  { a: null, b: 2, action: Action.Add, expected: null },
  { a: 2, b: null, action: Action.Add, expected: null },
  { a: 22, b: '10', action: Action.Divide, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'Operation ({$a, $b, $action}) should return $expected',
    ({ a, b, action, expected }) => {
      const res = simpleCalculator({ a, b, action });
      expect(res).toBe(expected);
    },
  );
});
