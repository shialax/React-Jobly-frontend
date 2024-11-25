import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import placeholder components
import HomePage from './components/HomePage';
import CompanyList from './components/CompanyList';
import CompanyDetail from './components/CompanyDetail';
import JobList from './components/JobList';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import ProtectedRoute from './ProtectedRoute';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/companies" element={<ProtectedRoute><CompanyList /></ProtectedRoute>} />
                    <Route path="/companies/:company" element={<ProtectedRoute><CompanyDetail /></ProtectedRoute>} />
                    <Route path="/jobs" element={<ProtectedRoute><JobList /></ProtectedRoute>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;