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
import Dashboard from './utils/pages/Dashboard';
import About from './pages/About';
// import NavBar from "./components/navbar/index";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Artists from './pages/All-Artist';
import AllCollections from './pages/AllCollections';

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
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/allcollections" element={<AllCollections />} />
          <Route path="/single-piece" element={<SinglePiece />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
