// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <div>
        {/* <BookList /> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<BookList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
