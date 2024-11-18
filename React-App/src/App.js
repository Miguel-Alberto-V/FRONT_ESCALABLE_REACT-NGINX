// App.js
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Tutorials from './components/Tutoriales';
import Comunidad from './components/Comunidad';
import Academias from './components/Academias';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tutoriales" element={<Tutorials />} />
          <Route path="/comunidad" element={<Comunidad/>} />
          <Route path="/academias" element={<Academias/>} />
        </Routes>
      <Footer />
    </div>
    </Router> 
  );
}

export default App;
