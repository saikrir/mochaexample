var bankAccount = {
  accountNbr: '',
  balance:0
}


function balance() {
    return bankAccount.balance;
}

function accountNumber(){
  return bankAccount.accountNbr;
}

function deposit(amt) {
    bankAccount.balance = bankAccount.balance + amt;
}

function withdraw(amt) {
  if(amt <= bankAccount.balance) {
    bankAccount.balance = bankAccount.balance - amt;
  }else {
    throw Error("Insufficient funds in your account" );
  }
}

function printBalance() {
  console.log("Account : ", bankAccount.accountNbr , " Balance is : $" , bankAccount.balance, " ");
}

function Account(){
    bankAccount.accountNbr = Math.ceil(Math.random() * 1000000);
    bankAccount.balance = 0;
    return {
      balance: balance,
      accountNumber: accountNumber,
      deposit: deposit,
      withdraw: withdraw,
      statment: printBalance
    };
}

module.exports = Account;
