import express from 'express';
import {addProduct} from '../controllers/addPro.js';


const router  = express.Router();
router.post('/transaction/receipt', addProduct);

export default router;

