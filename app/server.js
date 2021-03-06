
// ------------------------------
// Depends
// ------------------------------
import Koa from 'koa';
import config from '_config';

// ------------------------------
// Import middlewares
// ------------------------------
import router from '_server/middlewares/router';
import logger from '_server/middlewares/logger';

// Current ENV
const __ENV = process.env.NODE_ENV || 'development';

// ------------------------------
// Create instance
// ------------------------------
const app = new Koa();

// ------------------------------
// Apply middlewares
// ------------------------------
app.use(logger);
app.use(router);

// ------------------------------
// Subscribe on application non throw errors
// ------------------------------
app.on('error', (err) => {
  console.error(err.stack, err.line); // eslint-disable-line no-console
});

// ------------------------------
// Start application (localhost:3000)
// ------------------------------
app.listen(config[__ENV].server.port, function() {
  console.log(`Started: Name: ${config.name} | Port: ${config[__ENV].server.port}`); // eslint-disable-line no-console
});

export default app;
