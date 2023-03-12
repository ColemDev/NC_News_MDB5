import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArticleListPage from './pages/ArticleListPage';
import SingleArticlePage from './pages/SingleArticlePage';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ArticleListPage />} />
        <Route path="/articles" element={<ArticleListPage />} />
        <Route path="/articles/topics/:topic" element={<ArticleListPage />} />
        <Route path="/articles/id/:article_id" element={<SingleArticlePage />} />
      </Routes>
    </Router>
  );
};

export default App;
