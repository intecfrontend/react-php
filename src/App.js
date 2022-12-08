import Header from './Header';
// https://www.youtube.com/watch?v=nmCeSPGcBnY
import './App.css';
import Home from './Home'
import Login from './Login'
import Register from './Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>

      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
