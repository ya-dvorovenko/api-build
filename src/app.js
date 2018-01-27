import { PORT } from './scripts/config';

import http from 'http';

http.createServer((req, res) => {
  res.write('Hello from Node server');
  res.end();
}).listen(PORT);
