class Statement {
  constructor(){
    this.transactions = [];
  }

  printTransaction(amount){
    if (amount > 0){
      return ` ${this.formatCurrency(amount)} ||`;
    }
    else {
      return ' ||';
    }
  }

  printStatement(){
    let printedStatement = 'date || credit || debit || balance';
    let that = this;
    this.transactions.reverse().forEach(function (transaction){
      printedStatement += `\n${transaction.date} ||`;
      printedStatement += that.printTransaction(transaction.credit);
      printedStatement += that.printTransaction(transaction.debit);
      printedStatement += ` ${that.formatCurrency(transaction.balance)}`;
    });
    return printedStatement;
  }

  formatCurrency(value){
    return Number(value).toFixed(2);
  }
}
