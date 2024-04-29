import { Gauge } from 'prom-client';

const userRequestsTotal = new Gauge({
  name: 'user_requests_total',
  help: 'Total number of user requests processed',
});

const userRegistrationsTotal = new Gauge({
  name: 'user_registrations_total',
  help: 'Total number of user registrations',
});

function incrementUserRequests() {
  userRequestsTotal.inc();
}

function incrementUserRegistrations() {
  userRegistrationsTotal.inc();
}

// Register metrics with Prometheus endpoint (replace port if needed)
const registerPrometheusMetrics = () => {
  const express = require('express');
  const app = express();
  app.get('/metrics', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(Prometheus.register.metrics());
  });

  app.listen(9090, () => console.log('Prometheus metrics endpoint started on port 9090'));
};

registerPrometheusMetrics();

export default {
  incrementUserRequests,
  incrementUserRegistrations,
};
