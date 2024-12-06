import User from '../models/userModel.js';
import generateToken from '../utils/authUtils.js';

// REGISTER
const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.register(username, email, password);
    const token = generateToken({ id: user._id });

    res.status(201).json({
      token,
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
    const token = generateToken({ id: user._id, email: user.email });

    res.status(200).json({
      token,
      user: { id: user._id, email: user.email, username: user.username },
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

export { register, login };
