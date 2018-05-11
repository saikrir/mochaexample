var Account = require('./bank');

let myAccount = Account();
myAccount.deposit(1000);
myAccount.statment();

myAccount.withdraw(500);
myAccount.statment();
