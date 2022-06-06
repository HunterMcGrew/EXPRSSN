const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    userName: String!
    email: String!
    password: String!
    collections: [Collection]
  }

  type Piece {
    _id: ID!
    name: String!
    description: String!
    image: String
    category: [Category]
  }

  type Category {
    _id: ID!
    name: String!
    description: String!
  }

  type Collection {
    _id: ID!
    name: String!
    description: String!
    pieces: [Piece]
  }

  type Query {
    Users: [User]
   
  }
`;

module.exports = typeDefs;
