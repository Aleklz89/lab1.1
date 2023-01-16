import Router from './router.js';

const router = new Router();

const type = 'application/json'

router.get('/', (req, res, url) => {
  res.writeHead(200, { 'Content-Type': type });
  res.json({
    pathname: url.pathname,
    method: req.method,
    message: 'Hello from GET method in / pathname!',
  });
});

router.post('/', (req, res, url, payload, rawRequest) => {
  res.writeHead(200, { 'Content-Type': type });
  res.json({
    pathname: url.pathname,
    method: req.method,
    message: 'POST method',
    payload,
    rawRequest,
  });
});

router.delete('/delete', (req, res, url, payload, rawRequest) => {
  res.writeHead(200, { 'Content-Type': type });
  res.json({
    pathname: url.pathname,
    method: req.method,
    message: 'DELETE method',
    payload,
    rawRequest,
  });
});

router.patch('/patch', (req, res, url, payload, rawRequest) => {
  res.writeHead(200, { 'Content-Type': type });
  res.json({
    pathname: url.pathname,
    method: req.method,
    message: 'PATCH method',
    payload,
    rawRequest,
  });
});

router.options('/options', (req, res, url, payload, rawRequest) => {
  res.writeHead(200, { 'Content-Type': type });
  res.json({
    pathname: url.pathname,
    method: req.method,
    message: 'OPTIONS method',
    payload,
    rawRequest,
  });
});

export default router;
