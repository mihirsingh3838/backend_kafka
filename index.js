import express from 'express';
import Kafka from 'kafkajs';
import { kafka, port } from './config'; // Load your application configuration

// Initialize services
const userService = require('./services/user.service')(kafka);
const queueService = require('./services/queue.service')(kafka);
import { error as _error, info } from './utils/logger';
import { incrementUserRegistrations } from './utils/monitoring';

const app = express();

// Middleware
import { json } from 'body-parser'; // Enable parsing request bodies
app.use(json());

// User registration route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    await userService.registerUser(username, password);
    res.status(201).json({ message: 'User registered successfully' });
    incrementUserRegistrations(); // Update monitoring metric
  } catch (error) {
    _error('Error registering user:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

// Start consuming user requests (run in a separate process)
queueService.startConsuming()
  .then(() => info('Queue service started consuming user requests'))
  .catch((error) => _error('Error starting queue service:', error));

// Start the server
const server = app.listen(port, () => {
  info(`Server listening on port ${server.address().port}`);
});
