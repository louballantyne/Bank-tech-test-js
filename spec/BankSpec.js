describe("Bank", function() {
  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  describe("Balance", function() {
    it("returns a number", function() {
      expect(bank.balance).toEqual(jasmine.any(Number));
    });
  });

  describe("Deposit", function() {
    it("increases the balance by 500 if 500 is deposited", function(){
      bank.deposit(500);
      expect(bank.balance).toEqual(500);
    });
    it("increases the balance to 1500 with two separate deposits of 500 and 1000", function(){
      bank.deposit(500);
      bank.deposit(1000);
      expect(bank.balance).toEqual(1500);
    });
    it("allows a user to deposit a number with two decimal places", function(){
      bank.deposit(100.23);
      expect(bank.balance).toEqual(100.23);
    });
    it("Does not allow the user to deposit a negative number", function(){
      expect(bank.deposit(-10)).toEqual('Please enter a number > 0');
    });
    it("Does not allow the user to deposit values with more than 2dp", function(){
      expect(bank.deposit(34.235235)).toEqual('Please enter a number with no more than 2 decimal places');
    });
  });

  describe("Withdrawing with a balance of 1000", function(){
    beforeEach(function(){
      bank.balance = 1000;
    });

    it("User is able to withdraw an amount less than their balance", function(){
      bank.withdraw(200);
      expect(bank.balance).toEqual(800);
    });
    it("User is unable to withdraw a negative number", function(){
      expect(bank.withdraw(-10)).toEqual('Please enter a number > 0');
    });
    it("User is unable to withdraw a string value", function(){
      expect(bank.withdraw("sdgsdg")).toEqual('Please enter a number with no more than 2 decimal places');
    });
    it("User is unable to withdraw a value with more than 2dp", function(){
      expect(bank.withdraw(56.2342342)).toEqual('Please enter a number with no more than 2 decimal places');
    });
  });

  describe("Deposits and withdrawals create a new object to store the transaction", function(){
    it("A transaction object is created when a deposit is made", function(){
      var statement = jasmine.createSpyObj('statement',['transactions']);
      bank.statement = statement;
      statement.transactions= [];
      bank.deposit(100);
      expect(statement.transactions[0].balance).toEqual(100);
    });
    it("A transaction object is created when a withdrawal is made", function(){
      var statement = jasmine.createSpyObj('statement',['transactions']);
      bank.statement = statement;
      statement.transactions= [];
      bank.balance = 1000;
      bank.withdraw(100);
      expect(statement.transactions[0].balance).toEqual(900);
    });
  });

  describe("Bank calls statement to print statements", function(){
    it("calls the statement class to access the printStatement method", function(){
      var statement = jasmine.createSpyObj('statement',['printStatement']);
      bank.statement = statement;
      bank.viewStatement();
      expect(statement.printStatement).toHaveBeenCalled();
    });
  });

});
