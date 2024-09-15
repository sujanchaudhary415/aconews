import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">News Website</Link>
                <ul className="navbar-nav">
                    <li><Link className="nav-link" to="/general">General</Link></li>
                    <li><Link className="nav-link" to="/business">Business</Link></li>
                    <li><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="nav-link" to="/health">Health</Link></li>
                    <li><Link className="nav-link" to="/science">Science</Link></li>
                    <li><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li><Link className="nav-link" to="/technology">Technology</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
