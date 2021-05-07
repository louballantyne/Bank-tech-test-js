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
    let value = this.checkInputValid(amount);
    if(value != amount) return value;
    if(value.isTwoDecimalPlaces === false) return value;

    this.balance = this.balance + value;
    this.statement.transactions.push({credit: value, balance: this.balance, debit: 0, date: this.formatDate()});
  }

  isTwoDecimalPlaces(n){
    return Number(n) === n && (n * 100) % 1 === 0;
  }

  withdraw(amount){
    let number = this.checkInputValid(amount);
    if(number != amount) return number;
    if(number.isTwoDecimalPlaces === false) return number;
    if(number > this.balance) return "Insufficient funds";

    this.balance = this.balance - number;
    this.statement.transactions.push({credit: 0, balance: this.balance, debit: number, date: this.formatDate()});
  }

  checkInputValid(amount){
    let input = parseFloat(amount);
    if (input < 0) {
      return 'Please enter a number > 0';
    }
    else if (this.isTwoDecimalPlaces(input) === false){
      return 'Please enter a number with no more than 2 decimal places';
    }
    else {
      return input;
    }
  }

  formatDate(){
    var date = new Date();
    return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
  }

}
