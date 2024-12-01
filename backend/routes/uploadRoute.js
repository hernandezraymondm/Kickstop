import express from 'express';
import multer from 'multer';
import { storage } from '../utils/cloudinary.js';
import { uploadImage } from '../controllers/uploadController.js';

const router = express.Router();
const parser = multer({ storage: storage });

// Route for uploading files to Cloudinary
router.post('/image', parser.single('file'), uploadImage);

export default router;
