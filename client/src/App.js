import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink} from '@apollo/client';
// Import pages & components
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
// import NavBar from "./components/navbar/index";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Artists from './pages/All-Artist';
import Collections from './pages/All-Collections';
import SinglePiece from "./pages/Single-Piece";

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
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
          <Route path="/explore" element={<Collections />} />

          <Route path="/single-piece" element={<SinglePiece />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
