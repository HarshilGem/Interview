import express from 'express';
import {createnew} from '../controllers/mainController.js';


const router  = express.Router();
router.post('/create_location', createnew);

export default router;

