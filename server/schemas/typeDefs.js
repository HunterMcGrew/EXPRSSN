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
    image: String!
    link: String!
    category: [Category]
  }

  type Category {
    _id: ID!
    name: String!
    description: String!
    pieces: [Piece]
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
    user: User
    Piece(_id: ID!): Piece
    Category(_id: ID!): Category
    Collection(_id: ID!): Collection
    me: User

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCollection(name: String!, description: String!, userId:ID!): Collection
    addPiece(name: String!, artist: String!, description: String!, link: String!, collectionId:ID!): Collection
  }
`;

module.exports = typeDefs;
