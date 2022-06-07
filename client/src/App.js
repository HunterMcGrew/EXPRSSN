import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// Import pages & components 
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from "./pages/NotFound";
// import NavBar from "./components/navbar/index";
import NavBar from "./components/NavBar";
import SignUp from './pages/SignUp';
import Footer from './components/Footer'

function App() {
  return (
    // Command / router and uncomment Login to test login page
    // <Login />

    <Router>
    {/* <div> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        
        <Route path="*" element={<NotFound />} />
        
      {/* </div> */}
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;
