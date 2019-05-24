import React from 'react';
import './Header.css';
var bear = require("./bear.gif");

const Header = () => (
    <div>
        <header>
            <img src={bear} />
            <h2>Travel Pahaad</h2>
            <nav>
                <a>Not Your Home</a>
                <a>Do Not Contact</a>
            </nav>
        </header>
    </div>
);

export default Header;