import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllArticles from './pages/AllArticles';
import SingleArticlePage from './pages/SingleArticlePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/article/:article_id" element={<SingleArticlePage />} />
      </Routes>
      </Router>
  );
};

export default App;