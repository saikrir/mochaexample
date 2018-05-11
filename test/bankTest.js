var mocha = require('mocha');
var {assert, expect} = require('chai');
var Account = require('../src/bank');

before(() => {
  console.log("Befre");
});

describe('Bank Application', () => {

  var bankAccount;

  before(function(){
    bankAccount = new Account();
    console.log("New Account created: ", bankAccount.accountNumber());
  });

  afterEach(() => {
    bankAccount.statment();
  });

  it('New account Balance is $0 ', function() {
      expect(bankAccount.balance()).to.equal(0, "Initial Balance should be zero");
  });

  it('Deposit money increases balance by deposit amount ', function(){
      bankAccount.deposit(1000.00);
      expect(bankAccount.balance()).to.equal(1000, "Balance after deposit should be 1000");
  });

  it('Withdraw money decreases balance by withdraw amount', function(){
    bankAccount.withdraw(100.00);
    expect(bankAccount.balance()).to.equal(900, "Balance after widthdrawl should be 900");
  });

  it('Overdrawing money, throws an exception', function() {
    expect(() => {
        bankAccount.withdraw(1000.00)
    }).to.throw(Error, 'Insufficient funds in your account');
  });

});
