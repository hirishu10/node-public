import winston from "winston";

const logLevels = {
  error: "red",
  warn: "yellow",
  info: "green",
  verbose: "cyan",
  debug: "blue",
};

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
});

winston.addColors(logLevels);

export default logger;
