import mongoose from 'mongoose';

const transferSchema = new mongoose.Schema({
  fromCountry: String,
  toCountry: String,
  transferAmount: Number,
  convertedAmount: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Transfer = mongoose.model('Transfer', transferSchema);
export default Transfer;
