import { Kafka } from 'kafkajs';

class UserService {
  constructor(kafkaConfig) {
    this.kafka = new Kafka(kafkaConfig);
    this.producer = this.kafka.producer();
  }

  async registerUser(username, password) {
    // Implement user registration logic (e.g., secure password hashing)
    const user = { username, password }; // Replace with actual user object

    try {
      await this.producer.send({
        topic: 'user-registrations', // Topic for user registration events
        messages: [{ value: JSON.stringify(user) }],
      });
      console.log(`User ${username} registered successfully!`);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  }
}

export default UserService;
