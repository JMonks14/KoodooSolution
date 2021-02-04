const { accountTypeChecker } = require("./balanceHistory")

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

  

  console.log(accountTypeChecker(balanceHistory1))