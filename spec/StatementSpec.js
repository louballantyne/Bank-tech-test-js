describe("Statement", function(){
    var statement;

    beforeEach(function() {
      statement = new Statement();
    });

    describe("When there have been no transactions", function(){
      it("returns 'date || credit || debit || balance\n'", function(){
       expect(statement.printStatement()).toEqual("date || credit || debit || balance");
      });
    });

    describe('when there has been one transaction with a credit', function(){
      it('prints a statement containing a credit with a date', function(){
        statement.transactions = [ {credit: 500, balance: 1500, debit: 0, date: '2021-05-05'}];
        expect(statement.printStatement()).toEqual("date || credit || debit || balance\n2021-05-05 || 500.00 || || 1500.00");
      });
    });

    describe('when there has been one transaction with a debit', function(){
      it('prints a statement containing a debit with a date', function(){
        statement.transactions = [ {credit: 0, balance: 200, debit: 800, date: '2021-05-05'}];
        expect(statement.printStatement()).toEqual("date || credit || debit || balance\n2021-05-05 || || 800.00 || 200.00");
      });
    });

    describe('When there have been three transactions', function(){
      it('correctly prints a statement containing all transactions, in reverse chronological order', function(){
        statement.transactions = [ {date: '2021-05-05', debit: 800, credit: 0, balance: 200}, {date: '2021-05-05', debit: 0, credit: 12_000, balance: 12200}, {date: '2021-05-05', debit: 5000, credit: 0, balance: 7200}];
        expect(statement.printStatement()).toEqual("date || credit || debit || balance\n2021-05-05 || || 5000.00 || 7200.00\n2021-05-05 || 12000.00 || || 12200.00\n2021-05-05 || || 800.00 || 200.00");
      });
    });
    
});
