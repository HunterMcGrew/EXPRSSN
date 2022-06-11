const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { cloudinary } = require("./utils/cloudinary");

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3000;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
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
app.post("/api/upload", async (req, res) => {
  try {
    const fileString = req.body.data;
    // console.log(fileString);
    const uploadedResponse = await cloudinary.uploader.upload(fileString, {
      upload_preset: "project3"
    });
    console.log(uploadedResponse);
  } catch (err) {
    if (err) throw err;
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
  }
})

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
 
