const { port, address } = require('./config')
const fastify = require('./app')

fastify.listen(port, address, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  fastify.swagger()
})
