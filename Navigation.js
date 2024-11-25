import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/companies">Companies</Link> |
            <Link to="/jobs">Jobs</Link> |
            <Link to="/login">Login</Link> |
            <Link to="/signup">Signup</Link> |
            <Link to="/profile">Profile</Link>
        </nav>
    );
}

export default Navigation;