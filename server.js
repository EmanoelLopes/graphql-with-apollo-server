const { ApolloServer, gql } = require('apollo-server');
const schema = require('./schema');
const resolvers = require('./resolvers');
const config = require('./config');

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.listen({
  ...config.server,
}).then(() => console.log(`Listen on Port ${config.server.port}`));