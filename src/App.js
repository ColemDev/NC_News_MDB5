import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import AllArticles from './pages/AllArticles';
import SingleArticlePage from './pages/SingleArticlePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SingleArticlePage />} />
        {/* <Route path="/article/test" element={<SingleArticlePage />} /> */}
      </Routes>
      </Router>
  );
};

export default App;