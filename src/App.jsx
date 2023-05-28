import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { Home, Signup, Signin, Point, CafeList, CafeDetail } from './pages';
import { Header, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ overflowX: 'hidden' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/point" element={<Point />} />
          <Route path="/cafelist" element={<CafeList />} />
          <Route path="/cafelist/detail/:cafe_id" element={<CafeDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
