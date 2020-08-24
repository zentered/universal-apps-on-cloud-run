module.exports = {
  method: 'GET',
  url: '/',
  schema: {},
  handler: async (request, reply) => {
    reply.send('Welcome to Universal API')
  }
}
