import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !amount) {
      alert('Please fill in both fields');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title: title,
      amount: parseFloat(amount),
    };

    setTransactions([...transactions, newTransaction]);

    setTitle('');
    setAmount('');
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  // 🧮 Calculate Balance, Income & Expense
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income + expense;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">💸 Expense Tracker</h1>

        {/* Balance */}
        <div className="bg-indigo-100 text-indigo-800 font-semibold rounded-md p-4 mb-6 text-center shadow">
          Current Balance: ₹{balance.toFixed(2)}
        </div>

        {/* Income & Expense Summary */}
        <div className="flex justify-between gap-4 mb-6">
          <div className="bg-green-100 text-green-700 flex-1 rounded-md p-4 text-center shadow">
            <p className="text-sm font-medium">Income</p>
            <p className="text-lg font-bold">+ ₹{income.toFixed(2)}</p>
          </div>
          <div className="bg-red-100 text-red-700 flex-1 rounded-md p-4 text-center shadow">
            <p className="text-sm font-medium">Expense</p>
            <p className="text-lg font-bold">- ₹{Math.abs(expense).toFixed(2)}</p>
          </div>
        </div>

        {/* Add Transaction Form */}
        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Salary, Grocery"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Amount (use - for expense)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. +5000 or -1500"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold"
          >
            Add Transaction
          </button>
        </form>

        {/* Transaction List */}
        <div>
          <h2 className="text-lg font-bold text-gray-700 mb-3">Transactions</h2>
          <ul className="space-y-3 max-h-60 overflow-y-auto pr-2">
            {transactions.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm"
              >
                <span className="font-medium text-gray-800">{item.title}</span>
                <div className="flex items-center gap-2">
                  <span
                    className={`font-bold ${
                      item.amount < 0 ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    {item.amount < 0 ? '- ' : '+ '}₹{Math.abs(item.amount)}
                  </span>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-bold"
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
            {transactions.length === 0 && (
              <p className="text-sm text-gray-500 text-center">No transactions yet.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
