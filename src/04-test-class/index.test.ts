// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError, TransferFailedError } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const initialBalance = 100;
    const bankAccount = getBankAccount(initialBalance);
    expect(bankAccount.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const initialBalance = 100;
    const bankAccount = getBankAccount(initialBalance);
    expect(() => {
      bankAccount.withdraw(initialBalance + 5);
    }).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const initialBalance = 100;
    const bankAccount = getBankAccount(initialBalance);
    expect(() => bankAccount.transfer(150, bankAccount)).toThrowError();
  });

  test('should throw error when transferring to the same account', () => {
    const initialBalance = 100;
    const bankAccount = getBankAccount(initialBalance);
    expect(() => bankAccount.transfer(initialBalance, bankAccount)).toThrow(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    const initialBalance = 100;
    const bankAccount = getBankAccount(initialBalance);
    expect(bankAccount.deposit(100).getBalance()).toBe(200);
  });

  test('should withdraw money', () => {
    const initialBalance = 100;
    const bankAccount = getBankAccount(initialBalance);
    expect(bankAccount.withdraw(30).getBalance()).toBe(70);
  });

  test('should transfer money', () => {
    const initialBalance = 100;
    const bankAccountFirst = getBankAccount(initialBalance);
    const bankAccountSecond = getBankAccount(initialBalance);
    bankAccountFirst.transfer(50, bankAccountSecond);
    expect(bankAccountFirst.getBalance()).toBe(50);
    expect(bankAccountSecond.getBalance()).toBe(150);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const initialBalance = 100;
    const bankAccount = getBankAccount(initialBalance);
    const res = await bankAccount.fetchBalance();
    if (res !== null) {
      expect(typeof res).toBe('number');
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
