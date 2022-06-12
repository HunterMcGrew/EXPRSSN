import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import SinglePiece from './pages/Single-Piece';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Artists from './pages/AllArtistsG';
import AllCollections from './pages/AllCollectionsG';
import Collection from './pages/Piece';
// import Collection from "./pages/Collection";
import Upload from './pages/Upload';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    // Command / router and uncomment Login to test login page
    // <Login />
    <ApolloProvider client={client}>
      <Router>
        <MobileNav isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/explore" element={<AllCollections />} />
          <Route path="/single-piece/:id" element={<SinglePiece />} />
          {/* <Route path="/collection" element={<Collection /> } /> */}
          <Route path="/upload" element={<Upload />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
