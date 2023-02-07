import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllArticles from "./pages/AllArticles";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllArticles />} />
      </Routes>
    </Router>
  );
}

export default App;