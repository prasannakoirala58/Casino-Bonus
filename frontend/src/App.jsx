import { useState } from 'react';
import axios from 'axios';

function App() {
  const [deposit, setDeposit] = useState('');
  const [bonusType, setBonusType] = useState('fixed');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    try {
      console.log('Sending to backend:', { deposit: parseFloat(deposit), bonusType });
      const response = await axios.post('/api/calculate-bonus', {
        deposit: parseFloat(deposit) || 0,
        bonusType,
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error calculating bonus:', error);
      setError('Failed to calculate bonus. Please try again.');
    }
  };

  const formatCurrency = (value) => {
    return typeof value === 'number' ? value.toFixed(2) : '0.00';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Casino Player Bonus System</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="deposit" className="block text-sm font-medium text-gray-700">
              Deposit Amount
            </label>
            <input
              type="text"
              id="deposit"
              value={deposit}
              onChange={(e) => {
                const value = e.target.value;
                if (
                  value === '' ||
                  (/^\d*\.?\d*$/.test(value) && parseFloat(value) >= 0)
                ) {
                  setDeposit(value);
                }
              }}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
              style={{ appearance: 'textfield' }}
            />
          </div>
          <div>
            <label
              htmlFor="bonusType"
              className="block text-sm font-medium text-gray-700"
            >
              Bonus Type
            </label>
            <select
              id="bonusType"
              value={bonusType}
              onChange={(e) => setBonusType(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="fixed">Fixed</option>
              <option value="percentage">Percentage</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Calculate Bonus
          </button>
        </form>
        {error && (
          <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        {result && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Result:</h2>
            <p>Deposit: ${formatCurrency(result.deposit)}</p>
            <p>Bonus: ${formatCurrency(result.bonus)}</p>
            <p>Total: ${formatCurrency(result.total)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
