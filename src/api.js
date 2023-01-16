import Router from './router.js';

const router = new Router();

router.get('/', (req, res, url) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.json({
    pathname: url.pathname,
    method: req.method,
    message: 'Hello from GET method in / pathname!',
  });
});
