require('dotenv').config
import { GraphQLServer } from 'graphql-yoga'

const PORT = process.env.PORT || 4000
const typeDefs = `
    type Query {
        hello(name: String): String!
    }
`

const resolvers = {
    Query: {
        hello: () => 'Hello World'
      },
    }
const server = new GraphQLServer({typeDefs, resolvers})

server.start({port: PORT}, () => console.log(`Server running on http://localhost:${PORT}`))
//dotenv config에서 포트를 읽어오도록 할 수있다.