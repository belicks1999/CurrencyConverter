import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import transferRoutes from './Routes/transferRoutes.js';
import mongoose from 'mongoose';

const PORT = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Prefixed route
app.use('/api/transfers', transferRoutes);

mongoose.connect(
  'mongodb+srv://belicksmaxwell:e4PzEaTa1RmUwSIp@test.eribxci.mongodb.net/?retryWrites=true&w=majority&appName=test'
).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => console.error(error));
