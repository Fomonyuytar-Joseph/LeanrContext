import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link ,BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import { useState,createContext } from 'react';

export const AppContext= createContext()


function App() {
  const [username, setUsername] = useState("Joseph")
  return (
    <div className="App">
    <AppContext.Provider  value={{username,setUsername}}>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<h1>Page not found </h1>} />
    </Routes>
    </Router>
    </AppContext.Provider>
    
    </div>
  );
}

export default App;
