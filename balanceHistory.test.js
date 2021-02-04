const { test, expect } = require("@jest/globals")
const { accountTypeChecker } = require("./balanceHistory")
require('jest')

let balanceHistory1 = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    },
    {
        monthNumber: 3, // two months ago
        account: {
          balance: { amount: 300 },
        },
      }
  ]

  let balanceHistory2 = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 150 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 4000 },
      },
    },
    {
        monthNumber: 3, // two months ago
        account: {
          balance: { amount: 200 },
        },
      }
  ]

  let balanceHistory3 = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 150 },
      },
    }
    
  ]

test("check correctly identifies type B", () => {
    expect(accountTypeChecker(balanceHistory1)).toBe("B")
})

test("check correctly identifies type A", () => {
  expect(accountTypeChecker(balanceHistory2)).toBe("A")
})

test("check correctly identifies not enough data", () => {
  expect(accountTypeChecker(balanceHistory3)).toBe("Not enough data")
})
