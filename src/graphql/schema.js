const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    id: Int!
    email: String!
  }

  type Users {
    user(id: Int!): User
  }

  type Query {
    users: Users
  }

  type Mutation {
    createUser(email: String!): User!
  }
`);
