import User from '../models/User.js';
import { sign } from 'jsonwebtoken';
import { auth } from '../config';

const login = async (req, res) => {
  const { username, password } = req.body;

  // Implement user authentication logic (check username and password against database)

  const token = sign({ username }, auth.secret, { expiresIn: '1h' });
  res.json({ token });
};

export default { login };
