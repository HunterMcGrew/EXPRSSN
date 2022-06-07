import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import pages & components
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import NavBar from "./components/navbar/index";
import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      {/* <div> */}
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />

        {/* </div> */}
      </Routes>
    </Router>
  );
}

export default App;
