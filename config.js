export const db = {
    url: 'mongodb://localhost:27017/your_database_name', // Replace with your MongoDB connection string
    name: 'your_database_name', // Replace with your database name
};
export const kafka = {
    clientId: 'your_application_name', // Replace with your application name
    brokers: ['localhost:9092'], // Replace with your Kafka broker(s) address(es)
};
export const prometheus = {
    port: 9090, // Port for Prometheus metrics endpoint
};
export const auth = {
    secret: 'your_secret_key',
};
export const monitoring = {
    // Define metrics and thresholds for Grafana dashboards here (optional)
};
  