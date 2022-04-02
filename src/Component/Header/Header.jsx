import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>hello</h1>
            <nav>
              <Link to="/home">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/order">Order</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;