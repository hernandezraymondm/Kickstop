import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

// Define the schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters long'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long'],
  },
});

// Static registration method
userSchema.statics.register = async function (username, email, password) {
  // Input validation
  if (!username || !email || !password) {
    throw new Error('All fields must be filled');
  }
  if (!validator.isEmail(email)) {
    throw new Error('Email not valid');
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error(
      'Password not strong enough. It must include at least one uppercase letter, one number, and one symbol.'
    );
  }

  // Check if the username already exists
  const usernameExists = await this.findOne({ username });
  if (usernameExists) {
    throw new Error('Username already in use');
  }

  // Check if the email already exists
  const emailExists = await this.findOne({ email });
  if (emailExists) {
    throw new Error('Email already in use');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 11);

  // Create and return the user
  const user = await this.create({
    username,
    email,
    password: hashedPassword,
  });

  return user;
};

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  // Input validation
  if (!email || !password) {
    throw new Error('All fields must be filled');
  }
  if (!validator.isEmail(email)) {
    throw new Error('Email not valid');
  }

  // Check if user exists
  if (!user) {
    const error = new Error('Invalid email or password');
    // error.status = 401;
    throw error;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const error = new Error('Invalid email or password');
    // error.status = 401;
    throw error;
  }

  return user;
};

export default mongoose.model('User', userSchema);
