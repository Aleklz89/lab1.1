import * as http from 'node:http'
import helpers from './controllers/helpers.js'
import router from './api.js'

const server = http.createServer(async (req, res) => {
  await router.handle(req, Object.assign(res, helpers), router)
})

server.listen(parseInt(process.env.PORT) || 8080)

// eslint-disable-next-line n/handle-callback-err
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

process.on('SIGINT', () => {
  server.close((error) => {
    if (error) {
      console.error(error)
      process.exit(1)
    }
  })
  process.exit(0)
})
