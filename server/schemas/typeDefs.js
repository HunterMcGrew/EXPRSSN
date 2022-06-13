const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    pieces: [Piece]
  }

  type Piece {
    _id: ID!
    name: String!
    description: String!
    artist: String!
    link: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    Users: [User]
    User(_id: ID!): User
    me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removePiece(name: ID!): User
  }
`;

module.exports = typeDefs;