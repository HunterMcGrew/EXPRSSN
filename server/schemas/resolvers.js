const { AuthenticationError } = require("apollo-server-express");
const { User, Collection, Piece, Category } = require("../models");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");
const resolvers = {
  Query: {
    Users: async () => {
      return User.find({});
    },
    Pieces: async () => {
      return Piece.find({});
    },
    Categories: async () => {
      return Category.find({});
    },
    Collections: async () => {
      return Collection.find({});
    },
    User: async (parent, {_id} ) => {
      return User.findOne({_id})
    },
    Piece: async (parent, {_id} ) => {
      return Piece.findOne({_id});
    },
    Collection: async (parent, {_id} ) => {
      return Collection.findOne({_id});
    },
    Category: async (parent, {_id} ) => {
      return Category.findOne({_id});
    },

  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // First we create the user
      const user = await User.create({ username, email, password });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    login: async (parent, { email, password }) => {

      console.log('Login resolver revoked')
      const user = await User.findOne({ email });

      console.log(password);

      console.log(user);

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    addCollection: async (parent, { name, description, userId }, context) => {
      const collection = await Collection.create({ name, description });

      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { collections: collection.id },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError("You need to be logged in!");
    },

    addPiece: async (parent, { name, description, collectionId }, context) => {
      const piece = await Piece.create({ name, description });

      if (context.user) {
        return Collection.findOneAndUpdate(
          { _id: collectionId },
          {
            $addToSet: { pieces: piece.id },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError("You need to be logged in!");
    },

   
  },
  // createVote: async (parent, { _id, techNum }) => {
  //   const vote = await Matchup.findOneAndUpdate(
  //     { _id },
  //     { $inc: { [`tech${techNum}_votes`]: 1 } },
  //     { new: true }
  //   );
  //   return vote;
  // },
};

module.exports = resolvers;
