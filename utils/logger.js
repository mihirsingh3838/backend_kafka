import winston, { createLogger, transports as _transports } from 'winston';
const { format } = winston;

const logger = createLogger({
  level: 'info', // Adjust log level (e.g., 'debug', 'warn', 'error')
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ level, message, timestamp }) => `${timestamp} [${level}] ${message}`)
  ),
  transports: [
    new _transports.Console(), // Logs to console
    // Add additional transports for file logging if needed (e.g., winston.transports.File)
  ],
});

export default logger;
