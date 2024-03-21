import React from "react";
import  "./App.css";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
// import Article from "./pages/Article";

const App = () => {
    return (
        <Router >
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*<Route path="/article/:id" element={<Article />}/>*/}
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Router>
    );
}

export default App;