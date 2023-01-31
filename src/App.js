import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AllArticles from "./pages/AllArticles";
import MainNavbar from "./components/MainNavbar";

const App = () => {
    return (
        <Router>
        <MainNavbar />
        {/* <Routes>
            <Route path="/" element={<AllArticles />} />
        </Routes> */}
        </Router>
    );
    }

export default App;
