
import express from 'express';
import connectDB from './config/db.js';
import location from './routes/location.js';
import dotenv from 'dotenv';
import returntreeroute from './routes/returntreeroute.js';
import addPro from './routes/addPro.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use('/api',location);
app.use('/api', returntreeroute);
app.use('/api', addPro);


connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
