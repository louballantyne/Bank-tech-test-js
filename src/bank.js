class Bank {
  constructor(){
    this.balance = 0;
    this.statement = new Statement();
  }

  viewStatement() {
    let printedStatement = this.statement.printStatement();
    console.log(printedStatement);
  }

  deposit(amount){
    amount = this.checkInputValid(amount);
    if(amount.isTwoDecimalPlaces === false) return amount;

    this.balance = this.balance + amount;
    this.statement.transactions.push({credit: amount, balance: this.balance, debit: 0, date: this.formatDate()});
  }

  isTwoDecimalPlaces(n){
    return Number(n) === n && (n * 100) % 1 === 0;
  }

  withdraw(amount){
    amount = this.checkInputValid(amount);
    if(amount.isTwoDecimalPlaces === false) return amount;
    if(amount > this.balance) return "Insufficient funds";

    this.balance = this.balance - amount;
    this.statement.transactions.push({credit: 0, balance: this.balance, debit: amount, date: this.formatDate()});
  }

  checkInputValid(amount){
    amount = parseFloat(amount);
    if (amount < 0) {
      return 'Please enter a number > 0';
    }
    else if (this.isTwoDecimalPlaces(amount) === false){
      return 'Please enter a number with no more than 2 decimal places';
    }
    else {
      return amount;
    }
  }

  formatDate(){
    var date = new Date();
    return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
  }

}
