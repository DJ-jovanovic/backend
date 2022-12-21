import express from 'express';
import { createServer } from 'http';
import CONFIG from './config';
import DB from './models';

// Establish database connection
DB.authenticate();

import v1 from './routes/api';

const app = express();

app.use(v1);

const server = createServer(app);

server.listen(+CONFIG.PORT, () => {
  // todo logger
});

server.timeout = 100000;

export default app;
