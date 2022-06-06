import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MuiNabBar from "./components/navbar/index";

function App() {
  return (
    <div>
      <MuiNabBar />
      <Home />
    </div>
    
  );
}

export default App;
