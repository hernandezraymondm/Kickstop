import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { setupCloudinary } from './utils/cloudinary.js';
import uploadRouter from './routes/uploadRoute.js';
import productRoute from './routes/productRoute.js';
import stripeRoute from './routes/stripeRoute.js';
import subscriberRoute from './routes/subscriberRoute.js';
import authRouter from './routes/authRoute.js';

// Load environment variables
config();

const app = express();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log('Database connected successfully'))
  .catch((error) => console.error('Database connection error:', error));

// Setup Cloudinary
setupCloudinary();

// Routes
app.use('/upload', uploadRouter); // Handles image uploads
app.use('/product', productRoute); // Handles product-related routes
app.use('/stripe', stripeRoute); // Handles Stripe integration
app.use('/subscriber', subscriberRoute); // Handles subscriber-related routes
app.use('/auth', authRouter); // Handles authentication-related routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
