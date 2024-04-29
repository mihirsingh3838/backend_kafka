import { Kafka } from 'kafkajs';

class QueueService {
  constructor(kafkaConfig) {
    this.kafka = new Kafka(kafkaConfig);
    this.consumer = this.kafka.consumer({ groupId: 'user-requests-group' });
  }

  async startConsuming() {
    await this.consumer.connect();
    await this.consumer.subscribe({ topics: ['user-requests'] }); // Topic for user requests
    console.log('Queue service started consuming user requests...');

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const request = JSON.parse(message.value.toString());
        console.log(`Received request from user ${request.userId}:`, request.data);
        // Implement request processing logic here (e.g., database interaction, external service calls)
      },
    });
  }
}

export default QueueService;
