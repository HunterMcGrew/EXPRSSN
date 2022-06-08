const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    username: String!
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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    Users: [User]
    Pieces: [Piece]
    Categories: [Category]
    Collections: [Collection]
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCollection(name: String!, description: String!, userId:ID!): Collection
    addPiece(name: String!, description: String!, collectionId:ID!): Collection
  }
`;

module.exports = typeDefs;
