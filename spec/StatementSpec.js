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
});
