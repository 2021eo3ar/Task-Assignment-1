import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const handleDropdown = () => setDropdown(!dropdown);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    LENDING BUDDHA
                </a>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="/" className="nav-links" onClick={closeMobileMenu}>
                            HOME
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/services" className="nav-links" onClick={closeMobileMenu}>
                           ABOUT US
                        </a>
                    </li>
                    <li 
                        className="nav-item" 
                        onMouseEnter={() => setDropdown(true)} 
                        onMouseLeave={() => setDropdown(false)}
                    >
                        <a href="/signup" className="nav-links" onClick={handleDropdown}>
                            SIGN UP <i className="fas fa-caret-down"></i>
                        </a>
                        {dropdown && (
                            <div className="dropdown-menu">
                                <a href="/signup/user" className="dropdown-link" onClick={closeMobileMenu}>User</a>
                                <a href="/signup/admin" className="dropdown-link" onClick={closeMobileMenu}>Admin</a>
                            </div>
                        )}
                    </li>
                    <li className="nav-item">
                        <a href="/contact-us" className="nav-links" onClick={closeMobileMenu}>
                           LOGIN
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
