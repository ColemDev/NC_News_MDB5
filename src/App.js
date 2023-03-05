import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArticleListPage from './pages/ArticleListPage';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ArticleListPage />} />
        <Route path="/articles" element={<ArticleListPage />} />
        <Route path="/articles/:topic" element={<ArticleListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
