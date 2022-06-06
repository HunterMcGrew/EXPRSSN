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
    price: Number!
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
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
