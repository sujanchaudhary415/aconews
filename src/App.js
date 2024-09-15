import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import './App.css'
const App = () => {
    const pageSize = 10;
    
    return (
        <Router>
            <NavBar />
            <LoadingBar height={3} color='#f11946' />
            <Routes>
                <Route exact path="/" element={<News category="general" />} />
                <Route exact path="/general" element={<News category="general" />} />
                <Route exact path="/business" element={<News category="business" />} />
                <Route exact path="/entertainment" element={<News category="entertainment" />} />
                <Route exact path="/health" element={<News category="health" />} />
                <Route exact path="/science" element={<News category="science" />} />
                <Route exact path="/sports" element={<News category="sports" />} />
                <Route exact path="/technology" element={<News category="technology" />} />
            </Routes>
        </Router>
    );
};

export default App;
