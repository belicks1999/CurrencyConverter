import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransferHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const response = await axios.post('http://localhost:3001/api/transfers/history');
        setHistory(response.data);
      } catch (error) {
        console.error('Error fetching transfer history:', error);
      }
    }

    fetchHistory();
  }, []);

  return (
    <div className="bg-gray-600 h-screen flex justify-center items-center">
      <div className="bg-white p-1 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-center font-bold text-2xl mb-3">Transfer History</h1>
        
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                
                <th scope="col" className="px-6 py-3 tracking-wider">
                  From Country
                </th>
                <th scope="col" className="px-6 py-3 tracking-wider">
                  To Country
                </th>
                <th scope="col" className="px-6 py-3 tracking-wider">
                  Transfer Amount
                </th>
                <th scope="col" className="px-6 py-3 tracking-wider">
                  Converted Amount
                </th>
                <th scope="col" className="px-6 py-3 tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {history.map((transfer, index) => (
                <tr key={transfer._id} className="bg-white border-b text-black dark:bg-white">
                  
                  <td className="px-6 py-4">
                    {transfer.fromCountry}
                  </td>
                  <td className="px-6 py-4">
                    {transfer.toCountry}
                  </td>
                  <td className="px-6 py-4">
                    {transfer.transferAmount}
                  </td>
                  <td className="px-6 py-4">
                    {transfer.convertedAmount}
                  </td>
                  <td className="px-6 py-4">
                    {transfer.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default TransferHistory;
