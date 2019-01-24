let myAccount = {
    name: 'Elvis Knapman',
    expenses: 0,
    income: 0

};

let addExpense = function(account, amount) {
    account.expenses += amount;
}

let addIncome = function(account, amount) {
    account.income += amount;
}

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses.`;
}

addIncome(myAccount, 200);
addExpense(myAccount, 100.00);
addExpense(myAccount, 25.50);
let result = getAccountSummary(myAccount);

console.log(result);

resetAccount(myAccount);

result = getAccountSummary(myAccount);
console.log(result);

