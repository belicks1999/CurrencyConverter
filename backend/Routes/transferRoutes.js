import express from 'express';
import { getConvertedAmount, createTransfer,TransferHistory} from '../Controller/transferController.js';

const router = express.Router();


router.post('/get', getConvertedAmount);
router.post('/save', createTransfer);
router.post('/history', TransferHistory);

export default router;
