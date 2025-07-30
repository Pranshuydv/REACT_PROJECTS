import React, { useState } from "react";

const App = () => {

  const [amount, setAmount] = useState('')
  const [fromCurrency, setFromCurrency] = useState('')
  const [toCurrency, setToCurrency] = useState('')
  const [convertedAmount, setConvertedAmount] = useState('')

  const handleConvert = async () => {
    if (!amount || !fromCurrency || !toCurrency) {
      alert("Please fill all fields");
      return;
    }

    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      const rate = data.rates[toCurrency];
      const result = (amount * rate).toFixed(2);
      setConvertedAmount(result);
    } catch (err) {
      alert("Conversion failed. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">💱 Currency Converter</h1>

        {/* Amount Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Enter Amount</label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            type="number"
            placeholder="e.g. 100"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* From Currency */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">From</label>
          <select
            onChange={(e) => setFromCurrency(e.target.value)}
            value={fromCurrency}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">-- Select Currency --</option>
            <option value="USD">USD - US Dollar</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="EUR">EUR - Euro</option>
          </select>
        </div>

        {/* To Currency */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">To</label>
          <select
            onChange={(e) => setToCurrency(e.target.value)}
            value={toCurrency}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">-- Select Currency --</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
          </select>
        </div>

        {/* Convert Button */}
        <button
          onClick={handleConvert}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md">
          🔁 Convert
        </button>

        {/* Result */}
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-700 font-semibold">
            Converted Amount: {convertedAmount ? `${toCurrency} ${convertedAmount}` : '₹0.00'}
          </p>

        </div>
      </div>
    </div>
  );
};

export default App;
