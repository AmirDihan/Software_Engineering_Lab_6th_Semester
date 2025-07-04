class BankAccount {
    #accountNumber;
    #accountHolderName;
    #balance;
    constructor(accountNumber, accountHolderName, balance = 0) {
      this.#accountNumber = accountNumber;
      this.#accountHolderName = accountHolderName;
      this.#balance = balance >= 0 ? balance : 0;
    }
    get balance() {
      return this.#balance;
    }
    set balance(balance) {
      if (balance >= 0) {
        this.#balance = balance;
      } else {
        console.log("Balance cannot be negative.");
      }
    }
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
    withdraw(amount) {
      if (amount <= 0) {
        console.log("Withdrawal amount must be positive.");
      } else if (amount > this.#balance) {
        console.log("Insufficient funds. Withdrawal cancelled.");
      } else {
        this.#balance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
      }
    }
  }
  const account = new BankAccount("C223094", "Dihan", 1000);
  account.deposit(500);        // Deposited 500. New balance: 1500
  account.withdraw(200);       // Withdrew 200. New balance: 1300
  account.withdraw(2000);      // Insufficient funds. Withdrawal cancelled.
  console.log(account.balance);  // 1300
    