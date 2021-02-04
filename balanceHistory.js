
module.exports = {
   accountTypeChecker : (accountBalanceHistory) => {
    /***
    Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
    whether this array is of type A (variable) or type B (fixed).
  
    Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
  
    Type 🅱 is one where the balance amount changes by the same amount each month.
    ***/
  
    // Write your logic here  - No pressure 😁 //
    const months = accountBalanceHistory.length
    if (months < 3) {
        return "Not enough data"
    }

    let currentBalance = accountBalanceHistory[0].account.balance.amount
    let initDif = accountBalanceHistory[1].account.balance.amount - currentBalance
    
    for (let i = 2; i < months; i++) {

        let diff = accountBalanceHistory[i].account.balance.amount - accountBalanceHistory[i-1].account.balance.amount
        if (diff != initDif) {
            return "A"
        }
    }
  
    return "B";
  }
}
//   console.log(accountTypeChecker(accountBalanceHistory))