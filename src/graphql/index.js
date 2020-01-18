const grapqlHTTP = require('express-graphql');
const schema = require('./schema');
const userResolver = require('../Users/UserResolver');

const resolvers = {
  users: userResolver,
  createUser: userResolver.create,
};

module.exports = grapqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: (process.env.NODE_ENV || 'dev') === 'dev',
});
