import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import {
  register,
  login,
  checkAuth,
  logout,
} from '../controllers/authController.js';

const router = express.Router();

router.get('/check-auth', verifyToken, checkAuth);

router.post('/register', register);

router.post('/login', login);

router.post('/logout', logout);

export default router;
