module.exports = {
  routePrefix: '/docs',
  exposeRoute: true,
  swagger: {
    info: {
      title: process.env.SWAGGER_TITLE,
      description: '',
      version: ''
    },
    host: process.env.API_URL,
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [],
    securityDefinitions: {},
    definitions: {}
  }
}
