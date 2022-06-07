import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import pages & components 
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import NavBar from "./components/navbar/index";

function App() {
  return (
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
