import React from "react";
import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing />} />
        </Routes>
        <Routes>
          <Route path='/product/:productId' element={<ProductDetail />} />
        </Routes>
        <Routes>
          <Route>404 Not Foun</Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
