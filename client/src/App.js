import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// Import pages & components 
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
// import NavBar from "./components/navbar/index";
import NavBar from "./components/NavBar";
import Login from "./pages/Login"

const client = new ApolloClient({
  url: "graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    // Command / router and uncomment Login to test login page
    // <Login />
    <ApolloProvider client={client}>
    <Router>
    {/* <div> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        
        <Route path="*" element={<NotFound />} />
        
      {/* </div> */}
    </Routes>

    </Router>
    </ApolloProvider>
  );
}

export default App;
