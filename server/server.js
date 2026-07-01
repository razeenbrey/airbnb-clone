import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/database.js';
import ensureUploadDefaults from './config/ensureUploadDefaults.js';
import accommodationRoutes from './routes/accomodationRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middleware/auth.js';

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// make sure upload folder + default images exist (needed on Render)
ensureUploadDefaults();

const app = express();

const normalizeOrigin = (url) => (url ? url.replace(/\/$/, '') : null);

const allowedOrigins = [
  ...(process.env.CLIENT_URL
    ? process.env.CLIENT_URL.split(',').map((url) => normalizeOrigin(url.trim()))
    : []),
  'http://localhost:5173',
  'http://localhost:4173'
].filter(Boolean);

// Enable CORS - must be before routes
app.use(cors({
  origin: (origin, callback) => {
    const normalizedOrigin = normalizeOrigin(origin);

    if (!origin || allowedOrigins.includes(normalizedOrigin)) {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(null, false);
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
}));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for uploads + default images (Render has no persistent disk)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, 'uploads', 'accommodations');
const defaultsDir = path.join(__dirname, 'assets', 'defaults');

app.use('/uploads/accommodations', express.static(uploadsDir));
app.use('/uploads/accommodations', express.static(defaultsDir));

// Mount routes
app.use('/api/accommodations', accommodationRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/users', userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Airbnb Clone API' });
});

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Airbnb backend server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  console.log('Allowed CORS origins:', allowedOrigins);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  process.exit(1);
});