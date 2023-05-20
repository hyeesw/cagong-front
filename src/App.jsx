import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { Home, Signup, Signin } from './pages';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
