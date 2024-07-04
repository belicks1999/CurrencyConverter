import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';



function ConverterForm() {
  const [fromCountry, setFromCountry] = useState('');
  const [toCountry, setToCountry] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  

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

 async function handleSubmit(e) {
    e.preventDefault();
    
    try {
        const response = await axios.post('http://localhost:3001/api/transfers/save', {
            fromCountry,
            toCountry,
            transferAmount,
            convertedAmount
          });

          alert("Succwsfull")

        
          

        
        
    } catch (error) {

        console.log('There was an error making the transfer!', error);
        
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-full max-w-2xl">
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="from">From</label>
            <select
              onChange={(e) => setFromCountry(e.target.value)}
              className="w-full p-3 mb-3 rounded border"
              name="from"
              id="from"
            >
              <option value="">Select a country</option>
              <option value="USD">USD - US Dollars</option>
              <option value="AUD">AUD - Australian Dollars</option>
              <option value="LKR">LKR - Sri Lankan Rupee</option>
              <option value="INR">INR - Indian Rupee</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="to">To</label>
            <select
              onChange={(e) => setToCountry(e.target.value)}
              className="w-full p-3 mb-3 rounded border"
              name="to"
              id="to"
            >
              <option value="">Select a country</option>
              <option value="USD">USD - US Dollars</option>
              <option value="AUD">AUD - Australian Dollars</option>
              <option value="LKR">LKR - Sri Lankan Rupee</option>
              <option value="INR">INR - Indian Rupee</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-bold" htmlFor="amount">Amount</label>
            <input
              onChange={(e) => setTransferAmount(e.target.value)}
              type="text"
              className="w-full p-3 mb-3 rounded border"
              id="amount"
            />
          </div>

          

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

          <button className="w-full bg-blue-500 text-white p-3 rounded font-bold hover:bg-blue-700">
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConverterForm;
