import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import transferRoutes from './Routes/transferRoutes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const PORT = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Prefixed route
app.use('/api/transfers', transferRoutes);

mongoose.connect(process.env.MONGO_URL
).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => console.error(error));
