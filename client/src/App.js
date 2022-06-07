import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import pages & components 
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from "./pages/NotFound";
// import NavBar from "./components/navbar/index";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import SignUp from './pages/SignUp';

function App() {
  return (
    // Command / router and uncomment Login to test login page
    // <Login />

    <Router>
    {/* <div> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        
        <Route path="*" element={<NotFound />} />
        
      {/* </div> */}
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;
