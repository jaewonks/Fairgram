require('dotenv').config
import { GraphQLServer } from 'graphql-yoga'
import logger from 'morgan'
import schema from './schema'

const PORT = process.env.PORT || 4000
const server = new GraphQLServer({ schema })

// GraphQL 에는 express 서버가 내장되어 있다.
server.express.use(logger("dev"))
server.start({port: PORT}, () => console.log(`Server running on http://localhost:${PORT}`))
//dotenv config에서 포트를 읽어오도록 할 수있다.