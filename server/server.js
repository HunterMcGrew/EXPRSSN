const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
// auth middleware for tokens -- payload: { username, email, _id }
const { authMiddleware } = require('./utils/auth');
const { cloudinary } = require("./utils/cloudinary");

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
// post route for /upload page 
// uploads image to cloudinary
app.post("/api/upload", async (req, res) => {
  try {
    const fileString = req.body.data;
    // console.log(fileString);
    const uploadedResponse = await cloudinary.uploader.upload(fileString, {
      upload_preset: "project3"
    });
    res.json();
    console.log(uploadedResponse);
    // uploadedResponse.url is what we need to push into our mongoDB through GraphQL
    console.log("uploadedResponse URL", uploadedResponse.url);

    // need to change our model, typedefs, and mutation to include a "createdAt"
    // so we can sort pictures by date and time.
    // need to grab uploadedResponse.url and insert it into our mongoDB thru graphql

    // need to grab all the input data from upload.js page also...

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
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
 
