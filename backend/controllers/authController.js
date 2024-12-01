import User from '../models/userModel.js';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';

// REGISTER
const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.register(username, email, password);

    res.status(201).json({
      message: 'User registered successfully',
    });
  } catch (error) {
    console.error('Error during registration:', error);

    // Check error message and classify
    if (error.message.includes('already in use')) {
      return res.status(409).json({ message: error.message }); // Conflict
    } else if (
      error.message.includes('must be filled') ||
      error.message.includes('not valid') ||
      error.message.includes('not strong enough')
    ) {
      return res.status(400).json({ message: error.message }); // Bad Request
    }

    res.status(500).json({ message: 'Internal server error' }); // Fallback
  }
};

// LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    generateTokenAndSetCookie(res, user._id);

    res.status(200).json({
      success: true,
      message: 'Logged in successfully',
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error('Login error:', error);

    // Check error message and classify
    if (
      error.message.includes('must be filled') ||
      error.message.includes('not valid')
    ) {
      return res.status(400).json({ message: error.message }); // Bad Request
    } else if (error.message.includes('Invalid email or password')) {
      return res.status(401).json({ message: error.message }); // Unauthorized
    }

    res.status(500).json({ message: 'Internal server error' }); // Fallback
  }
};

const logout = async (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ success: true, message: 'Logged out successfully' });
};

const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log('Error in checkAuth ', error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export { register, login, logout, checkAuth };
