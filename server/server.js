import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { connectDB } from './config/db.js';
import inquiryRoutes from './routes/inquiries.js';
import propertyRoutes from './routes/properties.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: CLIENT_ORIGIN.split(',') }));
app.use(express.json());

// Basic abuse protection on the public enquiry endpoint
const enquiryLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 30 });
app.use('/api/inquiries', enquiryLimiter);

app.get('/api/health', (req, res) => res.json({ status: 'ok', service: 'kurhe-estates-api' }));
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/properties', propertyRoutes);

app.use((req, res) => res.status(404).json({ error: 'Not found' }));

connectDB(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/kurhe-estates').then(() => {
  app.listen(PORT, () => console.log(`Kurhe Estates API running on port ${PORT}`));
});
