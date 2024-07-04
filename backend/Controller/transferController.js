import axios from 'axios';

const getConversionRate=async(from,to)=>{


    const response = await axios.get();
    return response.data.conversion_rates[to];

}

const getConvertedAmount=async(req,res)=>{
    const { fromCountry, toCountry, transferAmount } = req.body;
    try {

        const conversionRate = await getConversionRate(fromCountry, toCountry);
        const convertedAmount = transferAmount * conversionRate;
        res.status(201).json(convertedAmount);
        
    } catch (error) {
        
    }




}