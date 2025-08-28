import express from 'express'
import {gettree} from '../controllers/returntree.js';

const router = express.Router();
 

router.get('/warehouse/tree', gettree);


export default router;