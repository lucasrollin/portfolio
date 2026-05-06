import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRouter from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
