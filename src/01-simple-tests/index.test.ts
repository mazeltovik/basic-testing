// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const res = simpleCalculator({ a: 7, b: 8, action: Action.Add });
    expect(res).toBe(15);
  });

  test('should subtract two numbers', () => {
    const res = simpleCalculator({ a: 5, b: 10, action: Action.Subtract });
    expect(res).toBe(-5);
  });

  test('should multiply two numbers', () => {
    const res = simpleCalculator({ a: 7, b: 8, action: Action.Multiply });
    expect(res).toBe(56);
  });

  test('should divide two numbers', () => {
    const res = simpleCalculator({ a: 6, b: 3, action: Action.Divide });
    expect(res).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    const res = simpleCalculator({
      a: 2,
      b: 2,
      action: Action.Exponentiate,
    });
    expect(res).toBe(4);
  });

  test('should return null for invalid action', () => {
    const res = simpleCalculator({ a: 1, b: 1, action: 'InvalidAction' });
    expect(res).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const res = simpleCalculator({ a: 7, b: null, action: Action.Divide });
    expect(res).toBeNull();
  });
});
