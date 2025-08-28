
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import itemRoutes from './routes/itemRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);

// Error handler
app.use(errorHandler);

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
