const express = require("express");
const { ApolloServer, UserInputError } = require("apollo-server-express");
const path = require("path");
// auth middleware for tokens -- payload: { username, email, _id }
const { authMiddleware } = require("./utils/auth");
const mongoose = require('mongoose');
const { cloudinary } = require("./utils/cloudinary");
const parseJwt = require("./utils/decode");
const User = require("./models/User");

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
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

// post route for /upload page

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

    // console.log(uploadedResponse);
    // console.log("inputData", inputData);
    // console.log("userData", userData);
    // console.log("decoded", decoded);

    // uploadedResponse.url is what we need to push into our mongoDB through GraphQL
    console.log("uploadedResponse URL", uploadedResponse.url);
      // on upload, find user, push in data to pieces array
      const addPiece = await User.findOneAndUpdate(
          { _id: decoded.data._id },
          // pushes pieces array 
          { $push: { pieces: { name: inputData.name, artist: inputData.artist, description: inputData.description, link: uploadedResponse.url }}},
          { new: true, runValidators: true }
      )
      .populate({
          path: "pieces",
          select: "-__v"
      });
    
    
    res.json({ messsage: "Image uploaded and added to database." });
  } catch (err) {
    if (err) throw err;
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
  }
});

app.put("/api/upload", async (req, res) => {
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
    // ID of peice we are updating
    const location = req.body.location;
    
    // taking upload response, uploading it to cloudinary
    const uploadedResponse = await cloudinary.uploader.upload(fileString, {
      upload_preset: "project3",
    });
    
    // console.log(uploadedResponse);
    // console.log("inputData", inputData);
    // console.log("userData", userData);
    // console.log("decoded", decoded);
    // console.log("location", location);

    // uploadedResponse.url is what we need to push into our mongoDB through GraphQL
    console.log("uploadedResponse URL", uploadedResponse.url);
      // on upload, find user, push in data to pieces array
      const removePiece = await User.findOneAndUpdate(
          { _id: decoded.data._id },
          { $pull: { pieces: {_id: location}}},
          // pushes pieces array 
          { new: true, runValidators: true }
      )
      .populate({
          path: "pieces",
          select: "-__v"
      });

      const updatePiece = await User.findOneAndUpdate(
        { _id: decoded.data._id },
        { $push: { pieces: { name: inputData.name, artist: inputData.artist, description: inputData.description, link: uploadedResponse.url }}},
        { new: true, runValidators: true }
        )
    
    
    res.json({ messsage: "Image uploaded and added to database." });
  } catch (err) {
    if (err) throw err;
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
  }
});

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
