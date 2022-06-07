import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import pages & components 
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
<<<<<<< HEAD
import NavBar from "./components/navbar/index";
import Login from "./pages/Login"
=======
// import NavBar from "./components/navbar/index";
import NavBar from "./components/NavBar";
>>>>>>> 9f05673bfaeee85520ea9fced7952f3f7f9c4d84

function App() {
  return (
    // Command / router and uncomment Login to test login page
    // <Login />

    <Router>
    {/* <div> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        
        <Route path="*" element={<NotFound />} />
        
      {/* </div> */}
    </Routes>

    </Router>
  );
}

export default App;
