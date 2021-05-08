function stubbed_transactions_1_deposit() {
  transaction = double('transaction', date: '2021-05-05', debit: 0, credit: 500, balance: 1500)
  transactions = [transaction]
  statement.instance_variable_set(:@transactions, transactions)
}
