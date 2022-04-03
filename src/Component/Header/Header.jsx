import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex bg-slate-400 py-3 items-center justify-between px-14 ">
            <h1 className="font-bold text-2xl border py-1 px-3 text-amber-300  sm:mt-0">
                Food Bank
            </h1>
            <nav className="flex  flex-col sm:flex-row ">
              <Link className="ml-8 font-bold text-white hover:text-amber-400" to="/home">Home</Link>
              <Link className="ml-8 font-bold text-white hover:text-amber-400" to="/shop">Shop</Link>
              <Link className="ml-8 font-bold text-white hover:text-amber-400" to="/order">Order</Link>
              <Link className="ml-8 font-bold text-white hover:text-amber-400" to="/contact">Contact</Link>
              <Link className="ml-8 font-bold text-white hover:text-amber-400" to="/about">About</Link>
              <Link className="ml-8 font-bold text-white hover:text-amber-400" to="/details">Details</Link>
            </nav>
        </div>
    );
};

export default Header;