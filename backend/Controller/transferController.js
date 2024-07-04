import axios from 'axios';
import Transfer from '../Model/transferModel.js';


const getConversionRate = async (from, to) => {
    const apiKey = process.env.API_KEY;
  const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`);
  return response.data.conversion_rates[to];
};

export const getConvertedAmount = async (req, res) => {
  const { fromCountry, toCountry, transferAmount } = req.body;
  try {
    const conversionRate = await getConversionRate(fromCountry, toCountry);
    const convertedAmount = Math.round((transferAmount * conversionRate) * 100) / 100;
    res.status(201).json({ convertedAmount });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createTransfer = async (req, res) => {
    const { fromCountry, toCountry, transferAmount,convertedAmount } = req.body;
    try {
      
  
      const newTransfer = new Transfer({
        fromCountry,
        toCountry,
        transferAmount,
        convertedAmount,
      });
  
      const savedTransfer = await newTransfer.save();
      res.status(201).json(savedTransfer);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  export const TransferHistory = async(req, res)=>{

    try {

        const getTransfers = await Transfer.find();
        res.status(200).json(getTransfers);
        
    } catch (error) {

        res.status(500).json({ message: error.message });
        
    }
   


  };

