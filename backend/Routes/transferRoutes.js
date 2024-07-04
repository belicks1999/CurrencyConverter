import express from 'express';
import { getConvertedAmount } from '../Controller/transferController.js';

const router = express.Router();


router.post('/get', getConvertedAmount);

export default router;
