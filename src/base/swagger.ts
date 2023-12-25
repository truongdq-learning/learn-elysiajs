import swagger from "@elysiajs/swagger";

export  const baseSwagger = swagger(
  {
    documentation: {
      info: {
        title: 'Elysia Documentation',
        version: '1.0.0'
      },
      tags: [
        { name: 'Posts', description: 'Posts endpoints' },
        { name: 'Users', description: 'Users endpoints' }
      ]
    }
  }
)
