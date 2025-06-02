"use strict";
class BankAccount {
    _balance;
    constructor(balance) {
        this._balance = balance;
    }
    deposit(amount) {
        this._balance += amount;
    }
    withdraw(amount) {
        if (amount > this._balance)
            return;
        this._balance -= amount;
    }
    getBalance() {
        return this._balance;
    }
}
const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance());
const account2 = new BankAccount(20);
account2.withdraw(30);
console.log(account2.getBalance());
//# sourceMappingURL=BankAccount.js.map