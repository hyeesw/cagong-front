import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { Home, Signup, Signin, Point } from './pages';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/point" element={<Point />} />
      </Routes>
    </div>
  );
}

export default App;
