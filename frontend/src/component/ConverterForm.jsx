import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ConverterForm() {
  // State variables for form fields and conversion result
  const [fromCountry, setFromCountry] = useState('');
  const [toCountry, setToCountry] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  // Effect to fetch converted amount when fromCountry, toCountry, or transferAmount changes
  useEffect(() => {
    const fetchConvertedAmount = async () => {
      if (fromCountry && toCountry && transferAmount) {
        try {
          const response = await axios.post('http://localhost:3001/api/transfers/get', {
            fromCountry,
            toCountry,
            transferAmount,
          });
          setConvertedAmount(response.data.convertedAmount);
        } catch (error) {
          console.error('There was an error making the transfer!', error);
        }
      }
    };

    fetchConvertedAmount();
  }, [fromCountry, toCountry, transferAmount]);

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/transfers/save', {
        fromCountry,
        toCountry,
        transferAmount,
        convertedAmount
      });

      // Show success toast upon successful transfer
      toast.success("Transfer successful!");
      // Clear form fields and conversion result
      setFromCountry('');
      setToCountry('');
      setTransferAmount('');
      setConvertedAmount('');

    } catch (error) {
      console.log('There was an error making the transfer!', error);
      toast.error("There was an error making the transfer!");
    }
  }

  // Render the form and inputs
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-full max-w-2xl">

        {/* Toast Container */}
        <ToastContainer />

        <form onSubmit={handleSubmit}>
          {/* From Country selection */}
          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="from">From</label>
            <select
              onChange={(e) => setFromCountry(e.target.value)}
              className="w-full p-3 mb-3 rounded border"
              name="from"
              id="from"
              value={fromCountry}
            >
              <option value="">Select a country</option>
              <option value="USD">USD - US Dollars</option>
              <option value="AUD">AUD - Australian Dollars</option>
              <option value="LKR">LKR - Sri Lankan Rupee</option>
              <option value="INR">INR - Indian Rupee</option>
            </select>
          </div>

          {/* To Country selection */}
          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="to">To</label>
            <select
              onChange={(e) => setToCountry(e.target.value)}
              className="w-full p-3 mb-3 rounded border"
              name="to"
              id="to"
              value={toCountry}
            >
              <option value="">Select a country</option>
              <option value="USD">USD - US Dollars</option>
              <option value="AUD">AUD - Australian Dollars</option>
              <option value="LKR">LKR - Sri Lankan Rupee</option>
              <option value="INR">INR - Indian Rupee</option>
            </select>
          </div>

          {/* Amount input */}
          <div className="mb-6">
            <label className="block mb-2 font-bold" htmlFor="amount">Amount</label>
            <input
              onChange={(e) => setTransferAmount(e.target.value)}
              type="number"
              className="w-full p-3 mb-3 rounded border"
              id="amount"
              min="1"
              value={transferAmount}
            />
          </div>

          {/* Display converted amount if available */}
          {transferAmount && convertedAmount && (
            <div className="mb-6">
              <label className="block mb-2 font-bold" htmlFor="convertedAmount">Converted Amount</label>
              <input
                type="text"
                className="w-full p-3 mb-3 rounded border"
                value={convertedAmount}
                id="convertedAmount"
                disabled
              />
            </div>
          )}

          {/* Submit button */}
          <button className="w-full bg-blue-500 text-white p-3 rounded font-bold hover:bg-blue-700">
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConverterForm;
