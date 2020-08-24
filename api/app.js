const { env } = require('./config')
const Fastify = require('fastify')
const AutoLoad = require('fastify-autoload')
const { join } = require('path')

const app = Fastify({
  disableRequestLogging: true // disable request logs since GCP does it by default
})

/**
 * OpenAPI Docs (Swagger)
 */
app.register(require('fastify-swagger'), require('./docs'))

app.register(AutoLoad, {
  dir: join(__dirname, 'routes')
})

if (env === 'development') {
  app.register(require('fastify-http-proxy'), {
    upstream: 'http://localhost:3000',
    prefix: '/api',
    http2: false
  })
}

module.exports = app
