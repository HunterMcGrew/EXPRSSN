const express = require("express");
const { ApolloServer, UserInputError } = require("apollo-server-express");
const path = require("path");
// auth middleware for tokens -- payload: { username, email, _id }
const { authMiddleware } = require("./utils/auth");
const mongoose = require('mongoose');
const { cloudinary } = require("./utils/cloudinary");
const parseJwt = require("./utils/decode");
const User = require("./models/User");
const Collection = require("./models/Collection");
const Piece = require("./models/Piece");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // use authMiddleware
  context: authMiddleware,
});


app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

// post route for /upload page
// uploads image to cloudinary
app.post("/api/upload", async (req, res) => {
  try {
    // req.body.data is data from the picture we are uploading
    const fileString = req.body.data;
    // req.body.input is data from the form we have them fill out
    // piece name, description, etc...
    const inputData = req.body.input;
    // jwt token -- we need to decode it
    const userData = req.body.user;
    // decoded userData so we can see email, username, _id
    const decoded = parseJwt(userData);

    // taking upload response, uploading it to cloudinary
    const uploadedResponse = await cloudinary.uploader.upload(fileString, {
      upload_preset: "project3",
    });

    console.log(uploadedResponse);
    console.log("inputData", inputData);
    console.log("userData", userData);
    console.log("decoded", decoded);

    // uploadedResponse.url is what we need to push into our mongoDB through GraphQL
    console.log("uploadedResponse URL", uploadedResponse.url);
    
      const addPiece = await User.findOneAndUpdate(
          { _id: decoded.data._id },
          // pushes reactions array 
          { $push: { pieces: { name: inputData.name, artist: inputData.artist, description: inputData.description, link: uploadedResponse.url }}},
          { new: true, runValidators: true }
      )
      .populate({
          path: "pieces",
          select: "-__v"
      })
    
    //get user by id, get all collections
    // const userCollections = await User.findOneAndUpdate({ _id: decoded.data._id })
    // .populate({path: "collections", select: "-__v"});

    // if it doesn't already exist make a new one
    // if (userCollections.collections !== inputData.collection) {
    //   const newCollection = await Collection.create({ name: inputData.collection, artist: inputData.artist, description: inputData.description })
    //   .then(({ name }) => {
    //     return User.findOneAndUpdate(
    //       { _id: decoded.data._id },
    //       { $push: { collections: name }},
    //       { new: true, runValidators: true }
    //     )
    //   }
    //   );
    // } else {
    //   // if it does exist findOneAndUpdate
    //   const existingCollection = await Collection.findOneAndUpdate(
    //     { name: inputData.collection },
    //     { $push: {piece: {name: inputData.name, artist: inputData.artist, description: inputData.description, link: uploadedResponse.url } } },
    //     { new: true, runValidators: true }
    //     .then(({ name }) => {
    //       console.log("name", name);
    //       return User.findOneAndUpdate(
    //         { _id: decoded.data._id },
    //         { $push: { collections: name }},
    //         { new: true, runValidators: true }
    //       )
    //     }
    //   ));
    // };
    

    // const pushUser = await User.find(
    //   { _id: decoded.data._id },
    //   { $push: {collections: newCollection || existingCollection}}
      
    // );  
    

    // const collection = Collection.find({name: inputData.collection});

    // find the user that's uplaoding context from JWT ({_id })

    // check for collection name if exists
    // if it doesnt exist create one

    // URL from uploadedResponse.url and set/w/e it into piece 

    // that piece is in the collection

    // the collection is set into user_collection



    //bring in the model and do the change heres
    // need to change our model, typedefs, and mutation to include a "createdAt"

    // so we can sort pictures by date and time.
    // need to grab uploadedResponse.url and insert it into our mongoDB thru graphql

    // need to grab all the input data from upload.js page also...
    res.json({ messsage: "Image uploaded and added to database." });
  } catch (err) {
    if (err) throw err;
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
  }
});

// Dont think we need an app.get for cloudinary since we are going to populate
// URL's from our DB.

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
