import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from "./components/navbar/index";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
    
  );
}

export default App;
