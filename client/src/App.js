import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// Import pages & components
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
// import NavBar from "./components/navbar/index";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Artists from './pages/All-Arists';
import About from './pages/About';

const client = new ApolloClient({
  url: 'graphql',
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
          <Route path="/artists" element={<Artists />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />

          {/* </div> */}
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
