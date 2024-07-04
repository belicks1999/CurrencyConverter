import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';

function TransferHistory({ isActiveTab }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false); // State to track loading status

  // Function to fetch transfer history
  const fetchHistory = async () => {
    setLoading(true); // Set loading to true before fetching

    try {
      const response = await axios.post('http://localhost:3001/api/transfers/history');
      setHistory(response.data); 
    } catch (error) {
      console.error('Error fetching transfer history:', error);
    } finally {
      setLoading(false); // Set loading to false whether fetch succeeds or fails
    }
  };

  // Effect to fetch history when isActiveTab changes
  useEffect(() => {
    if (isActiveTab) {
      fetchHistory();
    }
    
  }, [isActiveTab]);

  // Function to handle deletion of a transfer record
  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:3001/api/transfers/${id}`);
      setHistory(history.filter(transfer => transfer._id !== id)); // Update history state after deletion
      toast.success("Transfer deleted successfully!"); // Show success toast
    } catch (error) {
      console.log(error);
      toast.error("There was an error deleting the transfer!"); // Show error toast
    }
  }

  // Render transfer history table
  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white p-1 rounded-lg mt-5 w-full max-w-2xl">
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {history.map((transfer, index) => (
                  <tr key={transfer._id} className="bg-white border-b text-black dark:bg-white">
                    <td className="px-6 py-4">{transfer.fromCountry}</td>
                    <td className="px-6 py-4">{transfer.toCountry}</td>
                    <td className="px-6 py-4">{transfer.transferAmount}</td>
                    <td className="px-6 py-4">{transfer.convertedAmount}</td>
                    <td className="px-6 py-4">{transfer.date}</td>
                    <td>
                      <button onClick={() => handleDelete(transfer._id)}>
                        <FontAwesomeIcon icon={faTrashAlt} style={{ color: 'red' }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* Toast Container for showing delete operation feedback */}
      <ToastContainer />
    </div>
  );
}

export default TransferHistory;
