const S = require('fluent-schema')

const bodySerialization = S.object().prop(
  'data',
  S.array().items(
    S.object().prop('place', S.string()).prop('country', S.string())
  )
)

module.exports = {
  method: 'GET',
  url: '/',
  schema: {
    reply: {
      200: { bodySerialization }
    }
  },
  handler: async (request, reply) => {
    const results = {
      data: [
        {
          place: 'Morgins, Valais',
          country: 'Switzerland'
        },
        {
          place: "Provence-Alpes-Côte d'Azur",
          country: 'France'
        },
        {
          place: 'Tuscany',
          country: 'Italy'
        },
        {
          place: 'Campania',
          country: 'Italy'
        },
        {
          place: 'Sicily',
          country: 'Italy'
        },
        {
          place: 'Frankfurt',
          country: 'Germany'
        },
        {
          place: 'Larnaca',
          country: 'Cyprus'
        }
      ]
    }

    if (!results || results.data.length <= 0) {
      reply.callNotFound()
    }

    reply.send(results)
  }
}
