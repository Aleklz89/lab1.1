import * as http from 'node:http';
import helpers from './controllers/helpers.js';
import router from './api.js';

const index = http.createServer(async (req, res) => {
  await router.handle(req, Object.assign(res, helpers), router);
});

index.listen(parseInt(process.env.PORT) || 8080);

index.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

process.on('SIGINT', () => {
  index.close((error) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }
  });
  process.exit(0);
});
